package com.loan.agri.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.loan.agri.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByMobileNumber(String mobileNumber);
}
