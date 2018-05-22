package com.example.featuretest;

import com.example.featuretest.repositories.UserRepository;
import com.example.featuretest.models.User;
import org.junit.After;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import static com.codeborne.selenide.CollectionCondition.size;
import static com.codeborne.selenide.Selenide.*;
import static com.codeborne.selenide.Condition.*;

import java.util.stream.Stream;

import static io.restassured.RestAssured.when;
import static org.hamcrest.CoreMatchers.containsString;
import static org.hamcrest.core.Is.is;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.DEFINED_PORT)
public class FeatureTesting {
    User firstUser;
    User secondUser;
    long firstUserId;
    long secondUserId;

    @Autowired
    private UserRepository userRepository;

    @BeforeClass
    public static void configureSettings() {
        System.setProperty("selenide.browser", "Chrome");
        System.setProperty("selenide.headless", "true");
    }

    @Before
    public void setUp() {
        userRepository.deleteAll();

        firstUser = new User(
                "testeruser1",
                "TestFirst",
                "TestLast",
                "tester"
        );
        secondUser = new User(
                "testeruser2",
                "First",
                "Last",
                "testing"
        );

        firstUser = userRepository.save(firstUser);
        secondUser = userRepository.save(secondUser);

        firstUserId = firstUser.getId();
        secondUserId = secondUser.getId();
    }

    @After
    public void tearDown() {
        userRepository.deleteAll();
    }

    @Test
    public void shouldAllowUserToSignUp() throws Exception {
        open("http://localhost:4200");

        $("#nav-signup").click();

        $("#signup-form").should(appear);

        $("#signup-form-username").sendKeys("testingroute");
        $("#signup-form-firstname").sendKeys("Firstname");
        $("#signup-form-lastname").sendKeys("Lastname");
        $("#signup-form-password").sendKeys("testpw");
        $("#signup-form-submit").click();

        $("#dashboard-title").should(appear);
    }

    @Test
    public void shouldAllowUserToLogin() throws Exception {
        
    }
}
