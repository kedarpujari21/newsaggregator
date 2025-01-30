package com.newsaggregator.NewsAggregator.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Component
public class NewsScheduler {

	@Autowired
	private NewsWebSocketHandler newsWebSocketHandler;

	
	@Scheduled(fixedRate = 60000)  // Fetch news every 60 seconds
    public void fetchNewsAndBroadcast() {
        newsWebSocketHandler.sendNewsUpdates(); // Fetch and send the news to all clients
    }
}
