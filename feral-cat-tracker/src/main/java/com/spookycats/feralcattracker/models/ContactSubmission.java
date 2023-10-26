package com.spookycats.feralcattracker.models;

import jakarta.persistence.Entity;

@Entity
public class ContactSubmission extends AbstractEntity{

    private String name;
    private String email;
    private String phoneNumber;
    private String reasonForContact;
    private String message;

    public ContactSubmission() {}
    public ContactSubmission(String name, String email, String phoneNumber, String reasonForContact, String message) {
        this.name = name;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.reasonForContact = reasonForContact;
        this.message = message;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getReasonForContact() {
        return reasonForContact;
    }

    public void setReasonForContact(String reasonForContact) {
        this.reasonForContact = reasonForContact;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

}


