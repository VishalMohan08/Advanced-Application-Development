package com.loan.agri.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.loan.agri.entity.LoanApplication;

public interface LoanApplicationRepository extends JpaRepository<LoanApplication, Long> {

}
