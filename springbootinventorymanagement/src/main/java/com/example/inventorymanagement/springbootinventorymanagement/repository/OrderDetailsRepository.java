package com.example.inventorymanagement.springbootinventorymanagement.repository;

import com.example.inventorymanagement.springbootinventorymanagement.model.OrderDetails;

import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderDetailsRepository extends JpaRepository<OrderDetails, Long>{
    
}
