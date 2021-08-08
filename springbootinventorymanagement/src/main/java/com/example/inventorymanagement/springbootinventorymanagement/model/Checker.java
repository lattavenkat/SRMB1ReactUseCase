package com.example.inventorymanagement.springbootinventorymanagement.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
@Table(name = "checker")
public class Checker {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @NotNull(message = "Should not be NULL")
    @NotBlank(message = "Should not be BLANK")
    @NotEmpty(message = "Should not be EMPTY")
    @Size(min = 5, message = "username should have 5 characters")
    private String username;

    @NotNull(message = "Should not be NULL")
    @NotBlank(message = "Should not be BLANK")
    @NotEmpty(message = "Should not be EMPTY")
    @Size(min = 5, message = "password should have 5 characters")
    private String password;

    @NotNull(message = "Should not be NULL")
    @NotBlank(message = "Should not be BLANK")
    @NotEmpty(message = "Should not be EMPTY")
    @Size(min = 5, message = "password should have 5 characters")
    private String role;

    @NotNull(message = "Should not be NULL")
    @NotBlank(message = "Should not be BLANK")
    @NotEmpty(message = "Should not be EMPTY")
    private String hint;

    @NotNull(message = "Should not be NULL")
    @NotBlank(message = "Should not be BLANK")
    @NotEmpty(message = "Should not be EMPTY")
    @Size(min = 10, message = "phone number should have 10 digits")
    private String phone;

    @NotNull(message = "Should not be NULL")
    @NotBlank(message = "Should not be BLANK")
    @NotEmpty(message = "Should not be EMPTY")
    @Size(min = 12, message = "aadhar number should have 12 digits")
    private String aadhar;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getHint() {
        return hint;
    }

    public void setHint(String hint) {
        this.hint = hint;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getAadhar() {
        return aadhar;
    }

    public void setAadhar(String aadhar) {
        this.aadhar = aadhar;
    }

    

    public void setId(long id) {
        this.id = id;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public Checker() {
    }

    public Checker(long id,
            @NotNull(message = "Should not be NULL") @NotBlank(message = "Should not be BLANK") @NotEmpty(message = "Should not be EMPTY") @Size(min = 5, message = "username should have 5 characters") String username,
            @NotNull(message = "Should not be NULL") @NotBlank(message = "Should not be BLANK") @NotEmpty(message = "Should not be EMPTY") @Size(min = 5, message = "password should have 5 characters") String password,
            @NotNull(message = "Should not be NULL") @NotBlank(message = "Should not be BLANK") @NotEmpty(message = "Should not be EMPTY") @Size(min = 5, message = "password should have 5 characters") String role,
            @NotNull(message = "Should not be NULL") @NotBlank(message = "Should not be BLANK") @NotEmpty(message = "Should not be EMPTY") String hint,
            @NotNull(message = "Should not be NULL") @NotBlank(message = "Should not be BLANK") @NotEmpty(message = "Should not be EMPTY") @Size(min = 10, message = "phone number should have 10 digits") String phone,
            @NotNull(message = "Should not be NULL") @NotBlank(message = "Should not be BLANK") @NotEmpty(message = "Should not be EMPTY") @Size(min = 12, message = "aadhar number should have 12 digits") String aadhar) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.role = role;
        this.hint = hint;
        this.phone = phone;
        this.aadhar = aadhar;
    }
}
