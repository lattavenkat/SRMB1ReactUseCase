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
@Table(name = "vendor")
public class Vendor {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @NotNull(message = "Should not be NULL")
    @NotBlank(message = "Should not be BLANK")
    @NotEmpty(message = "Should not be EMPTY")
    @Size(min = 5, message = "Vendor Id should have 5 characters")
    private String vendorid;

    @NotNull(message = "Should not be NULL")
    @NotBlank(message = "Should not be BLANK")
    @NotEmpty(message = "Should not be EMPTY")
    @Size(min = 5, message = "Vendor name should have 5 characters")
    private String vendorname;

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

    @NotNull(message = "Should not be NULL")
    @NotBlank(message = "Should not be BLANK")
    @NotEmpty(message = "Should not be EMPTY")
    @Size(min = 5, message = "Supplier name should have 5 characters")
    private String suppliername;

    @NotNull(message = "Should not be NULL")
    @NotBlank(message = "Should not be BLANK")
    @NotEmpty(message = "Should not be EMPTY")
    @Size(min = 12, message = "Supplier mail should have 12 characters")
    private String suppliermail;

    @NotNull(message = "Should not be NULL")
    @NotBlank(message = "Should not be BLANK")
    @NotEmpty(message = "Should not be EMPTY")
    @Size(min = 10, message = "Supplier phone should have 10 characters")
    private String supplierphone;

    @NotNull(message = "Should not be NULL")
    @NotBlank(message = "Should not be BLANK")
    @NotEmpty(message = "Should not be EMPTY")
    @Size(min = 20, message = "Supplier address should have 20 characters")
    private String supplieraddress;

    public Vendor() {
    }

    public Vendor(long id,
            @NotNull(message = "Should not be NULL") @NotBlank(message = "Should not be BLANK") @NotEmpty(message = "Should not be EMPTY") @Size(min = 5, message = "Vendor Id should have 5 characters") String vendorid,
            @NotNull(message = "Should not be NULL") @NotBlank(message = "Should not be BLANK") @NotEmpty(message = "Should not be EMPTY") @Size(min = 5, message = "Vendor name should have 5 characters") String vendorname,
            @NotNull(message = "Should not be NULL") @NotBlank(message = "Should not be BLANK") @NotEmpty(message = "Should not be EMPTY") @Size(min = 5, message = "username should have 5 characters") String username,
            @NotNull(message = "Should not be NULL") @NotBlank(message = "Should not be BLANK") @NotEmpty(message = "Should not be EMPTY") @Size(min = 5, message = "password should have 5 characters") String password,
            @NotNull(message = "Should not be NULL") @NotBlank(message = "Should not be BLANK") @NotEmpty(message = "Should not be EMPTY") @Size(min = 5, message = "password should have 5 characters") String role,
            @NotNull(message = "Should not be NULL") @NotBlank(message = "Should not be BLANK") @NotEmpty(message = "Should not be EMPTY") String hint,
            @NotNull(message = "Should not be NULL") @NotBlank(message = "Should not be BLANK") @NotEmpty(message = "Should not be EMPTY") @Size(min = 10, message = "phone number should have 10 digits") String phone,
            @NotNull(message = "Should not be NULL") @NotBlank(message = "Should not be BLANK") @NotEmpty(message = "Should not be EMPTY") @Size(min = 12, message = "aadhar number should have 12 digits") String aadhar,
            @NotNull(message = "Should not be NULL") @NotBlank(message = "Should not be BLANK") @NotEmpty(message = "Should not be EMPTY") @Size(min = 5, message = "Supplier name should have 5 characters") String suppliername,
            @NotNull(message = "Should not be NULL") @NotBlank(message = "Should not be BLANK") @NotEmpty(message = "Should not be EMPTY") @Size(min = 12, message = "Supplier mail should have 12 characters") String suppliermail,
            @NotNull(message = "Should not be NULL") @NotBlank(message = "Should not be BLANK") @NotEmpty(message = "Should not be EMPTY") @Size(min = 10, message = "Supplier phone should have 10 characters") String supplierphone,
            @NotNull(message = "Should not be NULL") @NotBlank(message = "Should not be BLANK") @NotEmpty(message = "Should not be EMPTY") @Size(min = 20, message = "Supplier address should have 20 characters") String supplieraddress) {
        this.id = id;
        this.vendorid = vendorid;
        this.vendorname = vendorname;
        this.username = username;
        this.password = password;
        this.role = role;
        this.hint = hint;
        this.phone = phone;
        this.aadhar = aadhar;
        this.suppliername = suppliername;
        this.suppliermail = suppliermail;
        this.supplierphone = supplierphone;
        this.supplieraddress = supplieraddress;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getVendorid() {
        return vendorid;
    }

    public void setVendorid(String vendorid) {
        this.vendorid = vendorid;
    }

    public String getVendorname() {
        return vendorname;
    }

    public void setVendorname(String vendorname) {
        this.vendorname = vendorname;
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

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
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

    public String getSuppliername() {
        return suppliername;
    }

    public void setSuppliername(String suppliername) {
        this.suppliername = suppliername;
    }

    public String getSuppliermail() {
        return suppliermail;
    }

    public void setSuppliermail(String suppliermail) {
        this.suppliermail = suppliermail;
    }

    public String getSupplierphone() {
        return supplierphone;
    }

    public void setSupplierphone(String supplierphone) {
        this.supplierphone = supplierphone;
    }

    public String getSupplieraddress() {
        return supplieraddress;
    }

    public void setSupplieraddress(String supplieraddress) {
        this.supplieraddress = supplieraddress;
    }

    
}
