package com.newsaggregator.NewsAggregator.service;

import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import reactor.core.publisher.Mono;

@Service
public class NewsService {

	private final WebClient webClient;
	private final String API_KEY = "pub_661092e86b5ebaad8282e120c914e16182963";  //API key
    private final String API_URL = "https://newsdata.io/api/1/news?apikey=" + API_KEY + "&country=in";
    
    public NewsService(WebClient.Builder webClientBuilder) {
        this.webClient = webClientBuilder.baseUrl(API_URL).build();
    }
    
    public String fetchLatestNews() 
    {
        Mono<String> newsResponse = webClient.get()
        		.retrieve()
        		.bodyToMono(String.class);
        
        return newsResponse.block();
    }
 
}
