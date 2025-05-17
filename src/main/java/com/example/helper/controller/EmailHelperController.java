package com.example.helper.controller;

import com.example.helper.model.EmailRequest;
import com.example.helper.service.EmailHelperService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/email")
@CrossOrigin(origins = "*")
public class EmailHelperController {

    private EmailHelperService emailHelperService;

    public EmailHelperController(EmailHelperService emailHelperService) {
        this.emailHelperService = emailHelperService;
    }

    @PostMapping("/create")
    public ResponseEntity<String> createEmail(@RequestBody EmailRequest emailRequest) {
        String response = emailHelperService.createEmailReply(emailRequest);
        return ResponseEntity.ok(response);
    }
}
