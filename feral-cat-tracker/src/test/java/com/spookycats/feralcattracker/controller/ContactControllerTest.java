package com.spookycats.feralcattracker.controller;


import com.spookycats.feralcattracker.controllers.ContactController;
import com.spookycats.feralcattracker.data.ContactRepository;
import com.spookycats.feralcattracker.models.ContactSubmission;
import com.spookycats.feralcattracker.models.dto.ContactFormDTO;
import org.json.JSONObject;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.jdbc.JdbcTestUtils;

import static org.assertj.core.api.Assertions.assertThat;
import static org.hamcrest.Matchers.containsString;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;


import org.springframework.test.web.servlet.MockMvc;


@AutoConfigureMockMvc

@SpringBootTest

@ExtendWith(SpringExtension.class)

public class ContactControllerTest {
    @BeforeEach
    void clearDatabase(@Autowired JdbcTemplate jdbcTemplate) {
        JdbcTestUtils.deleteFromTables(jdbcTemplate, "contact_submission");
    }
    @Autowired
    private ContactRepository contactRepository;
    @Autowired
    private MockMvc mockMvc;


    @Test
    void endpointReturnsOk() throws Exception {
        final JSONObject json = new JSONObject();
        json.put("name", "Cat");
        this.mockMvc.perform(post("/contact").contentType(MediaType.APPLICATION_JSON).content(json.toString())).andDo(print()).andExpect(status().isOk());
        ContactSubmission contactSubmission = contactRepository.findByName("Cat");
        assertThat(contactSubmission.getName()).isEqualTo("Cat");
    }

    @Test
    void endpointReturnsAllFieldsOk() throws Exception {
        final JSONObject json = new JSONObject();
        json.put("name", "Cat");
        json.put("email", "Cat@gmail.com");
        json.put("phoneNumber", "816-555-5555");
        json.put("reasonForContact", "Cat Bounty");
        json.put("message", "I'm a cat who needs help!");
        this.mockMvc.perform(post("/contact").contentType(MediaType.APPLICATION_JSON).content(json.toString())).andDo(print()).andExpect(status().isOk()).andExpect(content().string(containsString("Contact message saved")));
        ContactSubmission contactSubmission = contactRepository.findByName("Cat");
        assertThat(contactSubmission.getName()).isEqualTo("Cat");
        assertThat(contactSubmission.getEmail()).isEqualTo("Cat@gmail.com");
        assertThat(contactSubmission.getPhoneNumber()).isEqualTo("816-555-5555");
        assertThat(contactSubmission.getReasonForContact()).isEqualTo("Cat Bounty");
        assertThat(contactSubmission.getMessage()).isEqualTo("I'm a cat who needs help!");

    }

    @Test
    void endpointStatusIsBadRequest() throws Exception {
        final JSONObject json = new JSONObject();
        //name is required but not set
        json.put("email", "cool@cool.com");
        this.mockMvc.perform(post("/contact").contentType(MediaType.APPLICATION_JSON)
                        .content(json.toString())).andDo(print()).andExpect(status().isBadRequest())
                .andExpect(content().string(containsString("Contact data contains null data")));
    }

}
