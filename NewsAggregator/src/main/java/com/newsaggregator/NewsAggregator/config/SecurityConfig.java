package com.newsaggregator.NewsAggregator.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

import com.newsaggregator.NewsAggregator.service.OAuth2SuccessHandler;

@Configuration
public class SecurityConfig {

	@Autowired
	public OAuth2SuccessHandler oauth2SuccessHandler;
	
	@Bean
	public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception{
		http
		.authorizeHttpRequests((authz) -> authz
                .requestMatchers("/login", "/", "/oauth2/**").permitAll()
                .anyRequest().authenticated()
            )
            .oauth2Login((oauth2) -> oauth2
                .successHandler(oauth2SuccessHandler)
            )
            .logout((logout) -> logout
                .logoutSuccessUrl("/")
            );

        return http.build();
	}
}
