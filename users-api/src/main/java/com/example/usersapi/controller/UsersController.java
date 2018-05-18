package com.example.usersapi.controller;

import com.example.usersapi.model.LoginRequest;
import com.example.usersapi.model.SignupRequest;
import com.example.usersapi.model.User;
import com.example.usersapi.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.nio.file.AccessDeniedException;

@RestController
public class UsersController {

    @Autowired
    UserRepository userRepository;

    @GetMapping("/")
    public Iterable<User> findAllUsers() {
        return userRepository.findAll();
    }

    @PostMapping("/")
    public User createNewUser(@RequestBody SignupRequest signupRequest) {
        String hashedPassword = BCrypt.hashpw(signupRequest.getPassword(), BCrypt.gensalt());
        User newUser = new User(
                signupRequest.getUsername(),
                signupRequest.getFirstName(),
                signupRequest.getLastName(),
                hashedPassword
        );

        return userRepository.save(newUser);
    }

    @PostMapping("/login")
    public User loginUser(@RequestBody LoginRequest loginRequest) throws AccessDeniedException {
        User foundUser = userRepository.findByUsername(loginRequest.getUsername());

        if (foundUser == null) {
            throw new AccessDeniedException("Invalid username or password");
        }

        boolean validCredentials = BCrypt.checkpw(loginRequest.getPassword(), foundUser.getPassword());

        if (validCredentials) {
            return foundUser;
        } else {
            throw new AccessDeniedException("Invalid username or password");
        }
    }

    // EXCEPTION HANDLERS

    @ExceptionHandler
    void handleInvalidCredentials(AccessDeniedException exception, HttpServletResponse response) throws IOException {

        response.sendError(HttpStatus.UNAUTHORIZED.value(), exception.getMessage());
    }
}
