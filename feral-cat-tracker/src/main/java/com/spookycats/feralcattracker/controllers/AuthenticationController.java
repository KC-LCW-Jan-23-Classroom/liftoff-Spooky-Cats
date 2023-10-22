package com.spookycats.feralcattracker.controllers;

import com.fasterxml.jackson.databind.util.JSONPObject;
import com.spookycats.feralcattracker.data.UserRepository;
import com.spookycats.feralcattracker.models.User;
import com.spookycats.feralcattracker.models.dto.LoginFormDTO;
import com.spookycats.feralcattracker.models.dto.RegisterFormDTO;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;


@RestController
public class AuthenticationController {

    @Autowired
    UserRepository userRepository;

    private static final String userSessionKey = "user";

    public User getUserFromSession(HttpSession session) {
        Integer userId = (Integer) session.getAttribute(userSessionKey);
        if (userId == null) {
            return null;
        }

        Optional<User> user = userRepository.findById(userId);

        if (user.isEmpty()) {
            return null;
        }

        return user.get();
    }

    private static void setUserInSession(HttpSession session, User user) {
        session.setAttribute(userSessionKey, user.getId());
    }


    @PostMapping(value= "/register" )
    public ResponseEntity<Map> processRegistrationForm(@RequestBody RegisterFormDTO registerFormDTO,
                                                          HttpServletRequest request)  {

        ResponseEntity response = null;

        Map<String, String> responseBody = new HashMap<>();



        try{

           User existingUser = userRepository.findByUsername(registerFormDTO.getUsername());
           User newUser = new User(registerFormDTO.getUsername(), registerFormDTO.getPassword(), registerFormDTO.getFirstName(), registerFormDTO.getLastName(), registerFormDTO.getEmail(), registerFormDTO.getPhoneNumber(), registerFormDTO.getAddress());
            if (existingUser == null && registerFormDTO.getUsername() != null && registerFormDTO.getPassword() != null){
                responseBody.put("message", "Given user details are successfully registered");
                    response = ResponseEntity
                            .status(HttpStatus.CREATED)
                            .body(responseBody);
                userRepository.save(newUser);
                } else if(existingUser != null) {
                responseBody.put("message", "User Already Exists.");
                response = ResponseEntity
                        .status(HttpStatus.BAD_REQUEST)
                        .body(responseBody);
            } else if(registerFormDTO.getUsername() == null) {
                responseBody.put("message", "Username required.");
                response = ResponseEntity
                        .status(HttpStatus.BAD_REQUEST)
                        .body(responseBody);
            } else if (registerFormDTO.getPassword() == null) {
                responseBody.put("message", "Password required");
                response = ResponseEntity
                        .status(HttpStatus.BAD_REQUEST)
                        .body(responseBody);
            }
            }catch (Exception ex){
            responseBody.put("message", "An exception occurred due to " + ex.getMessage());
                response = ResponseEntity
                        .status(HttpStatus.INTERNAL_SERVER_ERROR)
                        .body(responseBody);
            }

        User newUser = new User(registerFormDTO.getUsername(), registerFormDTO.getPassword(), registerFormDTO.getFirstName(), registerFormDTO.getLastName(), registerFormDTO.getEmail(), registerFormDTO.getPhoneNumber(), registerFormDTO.getAddress());

        setUserInSession(request.getSession(), newUser);
            return response;
        }


    @PostMapping("/login")
    public ResponseEntity<User> processLoginForm(@RequestBody LoginFormDTO loginFormDTO, HttpServletRequest request) throws Exception {

        ResponseEntity response = null;

        User theUser = userRepository.findByUsername(loginFormDTO.getUsername());
        String password = loginFormDTO.getPassword();
        if (theUser == null) {
//            throw new Exception("Username does not exist");
            response = ResponseEntity
                    .status(HttpStatus.BAD_REQUEST)
                    .body("Username does not exist");
        }else if (!theUser.isMatchingPassword(password)) {
//            throw new Exception("Password does not match");
            response = ResponseEntity
                    .status(HttpStatus.BAD_REQUEST)
                    .body("Password does not match");
        } else {
            setUserInSession(request.getSession(), theUser);
            response = ResponseEntity
                    .status(HttpStatus.CREATED)
                    .body(theUser);
        }
        return  response;
    }

}
