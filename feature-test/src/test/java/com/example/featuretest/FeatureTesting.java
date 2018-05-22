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
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.test.context.junit4.SpringRunner;

import static com.codeborne.selenide.Selenide.*;
import static com.codeborne.selenide.Condition.*;


@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.DEFINED_PORT)
public class FeatureTesting {
    User firstUser;
    User secondUser;
    long firstUserId;
    long secondUserId;


    private String encryptPassword(String plainPassword) {
        return BCrypt.hashpw(plainPassword, BCrypt.gensalt());
    }

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
                encryptPassword("tester")
        );
        secondUser = new User(
                "testeruser2",
                "First",
                "Last",
                encryptPassword("testing")
        );

        firstUser = userRepository.save(firstUser);
        secondUser = userRepository.save(secondUser);

        firstUserId = firstUser.getId();
        secondUserId = secondUser.getId();

        open("http://localhost:4200");
    }

    @After
    public void tearDown() {
        userRepository.deleteAll();
    }

    @Test
    public void shouldAllowUserToSignUp() throws Exception {
        $("#nav-signup").click();

        $("#signup-form").should(appear);

        $("#signup-form-username").sendKeys("testingroute");
        $("#signup-form-firstname").sendKeys("Firstname");
        $("#signup-form-lastname").sendKeys("Lastname");
        $("#signup-form-password").sendKeys("testpw");
        $("#signup-form-submit").click();

        $("#dashboard-title").should(appear);

        $("#nav-menu").click();
        $("#nav-logout").click();
    }

    @Test
    public void shouldAllowUserToLogin() throws Exception {
        $("#nav-login").click();

        $("#login-form").should(appear);

        $("#login-form-username").sendKeys("testeruser1");
        $("#login-form-password").sendKeys("tester");
        $("#login-form-submit").click();

        $("#dashboard-title").should(appear);

        $("#nav-menu").click();
        $("#nav-logout").click();
    }
}
