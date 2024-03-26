package com.loan.agri.service;

import com.loan.agri.entity.Document;

public interface DocumentService {
    Document uploadDocument(Document document);
    Document getDocumentById(Long id);

}
