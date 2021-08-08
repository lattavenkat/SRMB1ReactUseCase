package com.example.inventorymanagement.springbootinventorymanagement.repository;

import com.example.inventorymanagement.springbootinventorymanagement.model.Checker;

import org.springframework.data.jpa.repository.JpaRepository;

public interface CheckerRepository extends JpaRepository<Checker, Long> {
    
}
