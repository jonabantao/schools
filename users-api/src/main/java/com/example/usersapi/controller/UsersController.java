package com.example.usersapi.controller;

import com.example.usersapi.model.SessionRequest;
import com.example.usersapi.model.User;
import com.example.usersapi.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
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

    @GetMapping("/{userId}")
    public User findUser(@PathVariable long userId) {
        return userRepository.findOne(userId);
    }

    @PostMapping("/")
    public User createNewUser(@RequestBody SessionRequest signupRequest) {
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
    public User loginUser(@RequestBody SessionRequest loginRequest) throws AccessDeniedException {
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

    @PatchMapping("/{userId}")
    public User updateUser(@PathVariable long userId, @RequestBody User editedUser) {
        User userFromDb = userRepository.findOne(userId);

        userFromDb.setFirstName(editedUser.getFirstName());
        userFromDb.setLastName(editedUser.getLastName());

        return userRepository.save(userFromDb);
    }

    @DeleteMapping("/{userId}")
    public HttpStatus deleteUserById(@PathVariable long userId) throws EmptyResultDataAccessException {
        userRepository.delete(userId);
        return HttpStatus.OK;
    }

    // EXCEPTION HANDLERS

    @ExceptionHandler
    void handleInvalidCredentials(AccessDeniedException exception, HttpServletResponse response) throws IOException {

        response.sendError(HttpStatus.UNAUTHORIZED.value(), exception.getMessage());
    }
}
