package com.example.inventorymanagement.springbootinventorymanagement.repository;

import com.example.inventorymanagement.springbootinventorymanagement.model.Vendor;

import org.springframework.data.jpa.repository.JpaRepository;

public interface VendorRepository extends JpaRepository<Vendor, Long> {
    
}
