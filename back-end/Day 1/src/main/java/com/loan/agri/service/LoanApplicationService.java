package com.loan.agri.service;

import com.loan.agri.entity.LoanApplication;

public interface LoanApplicationService {
    LoanApplication applyForLoan(LoanApplication loanApplication);
    LoanApplication getLoanApplicationById(Long id);

}
