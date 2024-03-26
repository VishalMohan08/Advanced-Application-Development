package com.loan.agri.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.loan.agri.config.AuthenticationResponse;
import com.loan.agri.dto.LoginDTO;
import com.loan.agri.dto.UserDTO;
import com.loan.agri.serviceImpl.AuthenticationService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/public")
@RequiredArgsConstructor
public class PublicController {
	@Autowired
	private AuthenticationService authService;

	@PostMapping("/login")
	public ResponseEntity<AuthenticationResponse> authenticateUser(@RequestBody LoginDTO request) throws Exception {
		return ResponseEntity.ok(authService.authenticate(request));
	}
	
	@PostMapping("/getrole")
	public ResponseEntity<String> getRole(@RequestBody AuthenticationResponse request) throws Exception {
		return ResponseEntity.ok(authService.getRole(request));
	}
	
	@SuppressWarnings("null")
    @PostMapping("/register/admin")
	public ResponseEntity<HttpStatus> registerAdmin(@RequestBody UserDTO request) {
		return new ResponseEntity<HttpStatus>(authService.addAdmin(request));
	}

	@SuppressWarnings("null")
    @PostMapping("/register/user")
	public ResponseEntity<HttpStatus> registerUser(@RequestBody UserDTO request) {
		return new ResponseEntity<HttpStatus>(authService.addUser(request));
	}
}
