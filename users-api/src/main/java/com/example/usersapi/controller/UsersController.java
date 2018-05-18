package com.example.usersapi.controller;

import com.example.usersapi.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UsersController {

    @Autowired
    UserRepository userRepository;

    @GetMapping("/")
    public String test() {
        return "users working";
    }
}
