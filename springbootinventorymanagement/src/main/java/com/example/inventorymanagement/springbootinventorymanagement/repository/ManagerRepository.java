package com.example.inventorymanagement.springbootinventorymanagement.repository;

import com.example.inventorymanagement.springbootinventorymanagement.model.Manager;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ManagerRepository extends JpaRepository<Manager, Long>{
    
}
