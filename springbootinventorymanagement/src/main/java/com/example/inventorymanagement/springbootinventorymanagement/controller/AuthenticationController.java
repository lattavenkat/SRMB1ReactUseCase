package com.example.inventorymanagement.springbootinventorymanagement.controller;

import java.text.MessageFormat;
import java.util.HashMap;
import java.util.Map;
import java.util.Map.Entry;

import javax.servlet.http.HttpServletRequest;

import com.example.inventorymanagement.springbootinventorymanagement.configuration.JwtUtil;
import com.example.inventorymanagement.springbootinventorymanagement.model.AuthenticationRequest;
import com.example.inventorymanagement.springbootinventorymanagement.model.AuthenticationResponse;
import com.example.inventorymanagement.springbootinventorymanagement.model.UserDTO;
import com.example.inventorymanagement.springbootinventorymanagement.services.CustomUserDetailsService;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import io.jsonwebtoken.impl.DefaultClaims;

@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)
@RestController
public class AuthenticationController {
	@Autowired
	private AuthenticationManager authenticationManager;

	@Autowired
	private CustomUserDetailsService userDetailsService;

	@Autowired
	private JwtUtil jwtUtil;

	private Logger logg = LoggerFactory.getLogger(AuthenticationController.class);

	@CrossOrigin(origins = "http://localhost:3000")
	@RequestMapping(value = "/authenticate", method = RequestMethod.POST)
	public ResponseEntity<?> createAuthenticationToken(@RequestBody AuthenticationRequest authenticationRequest)
			throws Exception {
		logg.info("=========0");
		
		try {
			authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
					authenticationRequest.getUsername(), authenticationRequest.getPassword()));
					logg.info("=========00");
		} catch (DisabledException e) {
			throw new Exception("USER_DISABLED", e);
		}
		catch (BadCredentialsException e) {
			throw new Exception("INVALID_CREDENTIALS", e);
		}
		logg.info("==========1");
		UserDetails userdetails = userDetailsService.loadUserByUsername(authenticationRequest.getUsername());
		logg.info("==========2");
		
		String token = jwtUtil.generateToken(userdetails);
		logg.info("==========3");
		  
		AuthenticationResponse auth = new AuthenticationResponse();
		auth.setToken(token);
		
		MessageFormat.format("roles: {0}.",userdetails.getAuthorities().toArray()[0]);
		
		String[] rle = new String[userdetails.getAuthorities().toArray().length];
		for(int i=0;i<userdetails.getAuthorities().toArray().length;i++) {
			rle[i] =  userdetails.getAuthorities().toArray()[i].toString();
		}
		
		auth.setRoles(rle);

		return ResponseEntity.ok(auth);
	}
	
	@RequestMapping(value = "/register", method = RequestMethod.POST)
	public ResponseEntity<?> saveUser(@RequestBody UserDTO user) throws Exception {
		return ResponseEntity.ok(userDetailsService.save(user));
	}
	
	@RequestMapping(value = "/refreshtoken", method = RequestMethod.GET)
	public ResponseEntity<?> refreshtoken(HttpServletRequest request) throws Exception {
		logg.info("==============RefreshToken===");
		DefaultClaims claims = (io.jsonwebtoken.impl.DefaultClaims) request.getAttribute("claims");
		MessageFormat.format("====================Claims in RT is: {0}", request.getAttribute("claims"));
		Map<String, Object> expectedMap = getMapFromIoJsonwebtokenClaims(claims);
		String token = jwtUtil.doGenerateRefreshToken(expectedMap, expectedMap.get("sub").toString());
		return ResponseEntity.ok(new AuthenticationResponse(token));
	}

	public Map<String, Object> getMapFromIoJsonwebtokenClaims(DefaultClaims claims) {
		Map<String, Object> expectedMap = new HashMap<String, Object>();
		for (Entry<String, Object> entry : claims.entrySet()) {
			expectedMap.put(entry.getKey(), entry.getValue());
		}
		return expectedMap;
	}
}
