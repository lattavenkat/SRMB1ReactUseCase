package com.example.inventorymanagement.springbootinventorymanagement.repository;
import com.example.inventorymanagement.springbootinventorymanagement.model.Grocery;

import org.springframework.data.jpa.repository.JpaRepository;

public interface GroceryRepository extends JpaRepository<Grocery, Long> {

    
}
