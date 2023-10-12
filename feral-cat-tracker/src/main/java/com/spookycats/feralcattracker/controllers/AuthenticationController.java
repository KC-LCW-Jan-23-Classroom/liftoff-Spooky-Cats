package com.spookycats.feralcattracker.controllers;

import com.spookycats.feralcattracker.data.UserRepository;
import com.spookycats.feralcattracker.models.User;
import com.spookycats.feralcattracker.models.dto.LoginFormDTO;
import com.spookycats.feralcattracker.models.dto.RegisterFormDTO;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

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

    // Handled in Angular with routes
    @GetMapping("/register")
    public String displayRegistrationForm(Model model) {
        model.addAttribute(new RegisterFormDTO());
        model.addAttribute("title", "Register");
        return "register";
    }

//    Input Object - @ResponseBody LoginFormDTO
//
//    Output Object - ResponseEntity<MAKE OBJECT>

    @PostMapping("/register")
    public ResponseEntity<String> processRegistrationForm(@RequestBody RegisterFormDTO registerFormDTO,
                                                          HttpServletRequest request)  {

        ResponseEntity response = null;

        try{

           User  existingUser = userRepository.findByUsername(registerFormDTO.getUsername());
           User newUser = new User(registerFormDTO.getUsername(), registerFormDTO.getPassword(), registerFormDTO.getFirstName(), registerFormDTO.getLastName(), registerFormDTO.getEmail(), registerFormDTO.getPhoneNumber(), registerFormDTO.getAddress());
            if (existingUser == null && registerFormDTO.getUsername() != null && registerFormDTO.getPassword() != null){
                    response = ResponseEntity
                            .status(HttpStatus.CREATED)
                            .body("Given user details are successfully registered");
                userRepository.save(newUser);
                } else if(existingUser != null) {
                throw new Exception("User already exists");
            } else if(registerFormDTO.getUsername() == null) {
                throw new Exception("Username required");
            } else if (registerFormDTO.getPassword() == null) {
                throw new Exception("Password required");
            }
            }catch (Exception ex){
                response = ResponseEntity
                        .status(HttpStatus.INTERNAL_SERVER_ERROR)
                        .body("An exception occurred due to " + ex.getMessage());
            }

        User newUser = new User(registerFormDTO.getUsername(), registerFormDTO.getPassword(), registerFormDTO.getFirstName(), registerFormDTO.getLastName(), registerFormDTO.getEmail(), registerFormDTO.getPhoneNumber(), registerFormDTO.getAddress());

        setUserInSession(request.getSession(), newUser);
            return response;
        }

        //HANDLE ON FRONT END
//        String password = registerFormDTO.getPassword();
//        String verifyPassword = registerFormDTO.getVerifyPassword();
//        if (!password.equals(verifyPassword)) {
//            errors.rejectValue("password", "passwords.mismatch", "Passwords do not match");
//            model.addAttribute("title", "Register");
//            return "register";
//        }

//        User newUser = new User(registerFormDTO.getUsername(), registerFormDTO.getPassword(), registerFormDTO.getFirstName(), registerFormDTO.getLastName(), registerFormDTO.getEmail(), registerFormDTO.getPhoneNumber(), registerFormDTO.getAddress());
//        userRepository.save(newUser);
//
//        setUserInSession(request.getSession(), newUser);
//
//        return ResponseEntity.ok(newUser);
//    }

    @GetMapping("/login")
    public String displayLoginForm(Model model) {
        model.addAttribute(new LoginFormDTO());
        model.addAttribute("title", "Log In");
        return "login";
    }

    @PostMapping("/login")
    public String processLoginForm(@RequestBody LoginFormDTO loginFormDTO, HttpServletRequest request) throws Exception {


        User theUser = userRepository.findByUsername(loginFormDTO.getUsername());

        if (theUser == null) {
            throw new Exception("Username does not exist");

        }

        String password = loginFormDTO.getPassword();

        if (!theUser.isMatchingPassword(password)) {
            throw new Exception("Password does not match");

        }

        setUserInSession(request.getSession(), theUser);

        return "redirect:";
    }

    @GetMapping("/logout")
    public String logout(HttpServletRequest request){
        request.getSession().invalidate();
        return "redirect:/login";
    }

}
