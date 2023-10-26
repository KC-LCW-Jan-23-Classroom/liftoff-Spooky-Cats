package com.spookycats.feralcattracker.controllers;

import com.spookycats.feralcattracker.data.ContactRepository;
import com.spookycats.feralcattracker.data.UserRepository;
import com.spookycats.feralcattracker.models.ContactSubmission;
import com.spookycats.feralcattracker.models.User;
import com.spookycats.feralcattracker.models.dto.ContactFormDTO;
import com.spookycats.feralcattracker.models.dto.LoginFormDTO;
import com.spookycats.feralcattracker.models.dto.RegisterFormDTO;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
public class ContactController {

    @Autowired
    ContactRepository contactRepository;


    @PostMapping("/contact")
    public ResponseEntity<String> processContactForm(@RequestBody ContactFormDTO contactFormDTO,
                                                          HttpServletRequest request)  {

        if(contactFormDTO == null || contactFormDTO.getName() == null)
        {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Contact data contains null data");

        }

        ResponseEntity response;

        final ContactSubmission contactSubmission = new ContactSubmission();
        contactSubmission.setEmail(contactFormDTO.getEmail());
        contactSubmission.setReasonForContact(contactFormDTO.getReasonForContact());
        contactSubmission.setMessage(contactFormDTO.getMessage());
        contactSubmission.setName(contactFormDTO.getName());
        contactSubmission.setPhoneNumber(contactFormDTO.getPhoneNumber());
        try {
            contactRepository.save(contactSubmission);
        }catch (Exception e)
        {
            response = ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Contact data could not be saved");
            return response;
        }
        response = ResponseEntity.status(HttpStatus.OK).body("Contact message saved");
            return response;
        }
}
