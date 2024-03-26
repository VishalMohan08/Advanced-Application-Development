package com.loan.agri.serviceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.loan.agri.config.AuthenticationResponse;
import com.loan.agri.dto.LoginDTO;
import com.loan.agri.dto.UserDTO;
import com.loan.agri.entity.User;
import com.loan.agri.entity.enumerate.Role;
import com.loan.agri.repository.UserRepository;
import com.loan.agri.util.JwtService;

@Service
public class AuthenticationService {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtService jwtService;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private UserRepository userRepository;

    public HttpStatus addUser(UserDTO userDTO) {

        User user = new User();
        user.setMobileNumber(userDTO.getMobileNumber());
        user.setPassword(passwordEncoder.encode(userDTO.getPassword()));
        user.setRole(Role.USER);

        userRepository.save(user);

        return HttpStatus.CREATED;
    }

	public HttpStatusCode addAdmin(UserDTO userDTO) {
		
		User user = new User();
        user.setMobileNumber(userDTO.getMobileNumber());
        user.setPassword(passwordEncoder.encode(userDTO.getPassword()));
        user.setRole(Role.ADMIN);

        userRepository.save(user);

        return HttpStatus.CREATED;
	}

	public String getRole(AuthenticationResponse request) {
		return jwtService.extractRole(request.getToken());
	}

	public AuthenticationResponse authenticate(LoginDTO request) {
		authenticationManager
				.authenticate(new UsernamePasswordAuthenticationToken(request.getMobileNumber(), request.getPassword()));
		var user = userRepository.findByMobileNumber(request.getMobileNumber()).orElseThrow();
		var jwtToken = jwtService.generateToken(user);
		return AuthenticationResponse.builder().token(jwtToken).build();
	}

}
