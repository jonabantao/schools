package com.example.featuretest.models;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class SessionRequest {
    private String username;
    private String firstName;
    private String lastName;
    private String password;
}