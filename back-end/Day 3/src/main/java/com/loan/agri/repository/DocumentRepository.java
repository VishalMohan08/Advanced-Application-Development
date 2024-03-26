package com.loan.agri.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.loan.agri.entity.Document;

public interface DocumentRepository extends JpaRepository<Document, Long> {

}
