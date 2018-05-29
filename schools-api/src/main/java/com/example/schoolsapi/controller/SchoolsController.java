package com.example.schoolsapi.controller;

import com.example.schoolsapi.model.School;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;


@RestController
public class SchoolsController {

    private final String SCHOOLS_URI = "https://data.sfgov.org/resource/mmsr-vumy.json?map_label=CDC095";

    @GetMapping("/")
    public Iterable<School> findAllSchools() {
        School test;
        RestTemplate restTemplate = new RestTemplate();
        School[] result = restTemplate.getForObject(SCHOOLS_URI, School[].class);

        return Arrays.asList(result);
    }

}
