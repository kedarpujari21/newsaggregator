package com.newsaggregator.NewsAggregator.service;

import java.io.IOException;
import java.util.Collections;
import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;


@Component
public class NewsWebSocketHandler extends TextWebSocketHandler{
	private final Set<WebSocketSession> sessions = Collections.synchronizedSet(new HashSet<>());
	
	@Autowired
	private NewsService newsService;
	
	@Override
	public void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception
	{
		String latestNews = newsService.fetchLatestNews(); // it will fetch latest news
		session.sendMessage(new TextMessage(latestNews));
	}
	
	@Override
    public void afterConnectionEstablished(WebSocketSession session) throws Exception {
        super.afterConnectionEstablished(session);
        sessions.add(session); // Add new session when WebSocket connection is established
        System.out.println("New WebSocket connection established: " + session.getId());
    }

    @Override
    public void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {
        super.afterConnectionClosed(session, status);
        sessions.remove(session); // Remove session when WebSocket connection is closed
        System.out.println("WebSocket connection closed: " + session.getId());
    }
    
    
	public void sendNewsUpdates()
	{
		String newArticle = newsService.fetchLatestNews(); 
		//Iterate over all web socket sessions and push update
		for(WebSocketSession session : sessions)
		{
			try 
			{
				session.sendMessage(new TextMessage(newArticle));
			}catch(IOException e) {
				e.printStackTrace();
			}
		}
	}
}
