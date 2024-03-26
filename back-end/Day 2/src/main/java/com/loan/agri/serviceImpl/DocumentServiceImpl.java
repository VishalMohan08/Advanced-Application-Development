package com.loan.agri.serviceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.loan.agri.entity.Document;
import com.loan.agri.repository.DocumentRepository;
import com.loan.agri.service.DocumentService;

@Service
public class DocumentServiceImpl implements DocumentService {
    @Autowired
    private DocumentRepository documentRepository;

    @Override
    public Document uploadDocument(Document docs) {
        return documentRepository.save(docs);
    }

    @Override
    public Document getDocumentById(Long id) {
        return documentRepository.findById(id).orElse(null);
    }

}
