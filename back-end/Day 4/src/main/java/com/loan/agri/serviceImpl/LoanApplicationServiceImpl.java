package com.loan.agri.serviceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.loan.agri.entity.LoanApplication;
import com.loan.agri.repository.LoanApplicationRepository;
import com.loan.agri.service.LoanApplicationService;

@Service
public class LoanApplicationServiceImpl implements LoanApplicationService {
    @Autowired
    private LoanApplicationRepository loanApplicationRepository;

    @Override
    public LoanApplication applyForLoan(LoanApplication loanApplication) {
        return loanApplicationRepository.save(loanApplication);
    }

    @Override
    public LoanApplication getLoanApplicationById(Long id) {
        return loanApplicationRepository.findById(id).orElse(null);
    }

}
