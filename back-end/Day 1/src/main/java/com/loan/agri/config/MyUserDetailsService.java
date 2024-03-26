package com.loan.agri.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import com.loan.agri.repository.UserRepository;


public class MyUserDetailsService implements UserDetailsService{
	
	@Autowired
	private UserRepository repository;


	@Override
	public UserDetails loadUserByUsername(String mobileNumber) throws UsernameNotFoundException {
		return repository.findByMobileNumber(mobileNumber)
				.orElseThrow(() -> new UsernameNotFoundException("Mobile Number not found"));
	}

}
