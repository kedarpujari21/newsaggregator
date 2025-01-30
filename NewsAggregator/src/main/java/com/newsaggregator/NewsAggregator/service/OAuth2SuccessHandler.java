package com.newsaggregator.NewsAggregator.service;
import java.io.IOException;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.oauth2.client.authentication.OAuth2AuthenticationToken;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

import com.newsaggregator.NewsAggregator.model.User;
import com.newsaggregator.NewsAggregator.repository.UserRepository;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@Component
public class OAuth2SuccessHandler implements AuthenticationSuccessHandler{

	@Autowired
	private UserRepository userRepository;

	@Override
	public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication)
	        throws IOException, ServletException {
	    
	    if (authentication instanceof OAuth2AuthenticationToken) {
	        OAuth2AuthenticationToken oAuth2Token = (OAuth2AuthenticationToken) authentication;
	        
	        OAuth2User oAuth2User = oAuth2Token.getPrincipal();

	        String name = oAuth2User.getAttribute("name");
	        String email = oAuth2User.getAttribute("email");

	        String provider = oAuth2Token.getAuthorizedClientRegistrationId();

	        Optional<User> existingUser = userRepository.findByEmail(email);

	        if (existingUser.isEmpty()) {
	            // Save new user
	            User user = new User();
	            user.setName(name);
	            user.setEmail(email);
	            user.setProvider(provider);
	            userRepository.save(user);
	        }
	    }

	    response.sendRedirect("http://localhost:5173/home"); // Update URL as per the react frontend running url 5173 I guess
	}
	
}
