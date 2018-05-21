package com.example.usersapi.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;
import org.hibernate.validator.constraints.Length;
import org.hibernate.validator.constraints.NotBlank;

import javax.persistence.*;

@Data
@AllArgsConstructor @NoArgsConstructor @Getter @Setter
@Entity @Table(name = "USERS")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    @Column(name = "USERNAME", unique = true, length = 100)
    private String username;

    @NotBlank
    @Column(name = "FIRST_NAME", length = 100)
    private String firstName;

    @NotBlank
    @Column(name = "LAST_NAME", length = 100)
    private String lastName;

    @Column(name = "PASSWORD")
    @Length(min = 6, max = 72)
    private String password;

    @JsonIgnore
    public String getPassword() {
        return this.password;
    }

    public void setPassword(String newPassword) {
        this.password = newPassword;
    }


    public User(String username, String firstName, String lastName, String password) {
        this.username = username;
        this.firstName = firstName;
        this.lastName = lastName;
        this.password = password;
    }

}
