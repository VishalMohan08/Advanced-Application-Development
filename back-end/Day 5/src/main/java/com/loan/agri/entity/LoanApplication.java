package com.loan.agri.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import lombok.Data;

@Entity
@Data
public class LoanApplication {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String applicantName;
    private String panNumber;
    private double salary;
    private String mobileNumber;
    private double loanAmount;
    private int repaymentMonths;
    private String aadharNumber;

    @ManyToOne
    private User user;
}