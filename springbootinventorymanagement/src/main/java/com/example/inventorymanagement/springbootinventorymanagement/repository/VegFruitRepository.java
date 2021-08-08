package com.example.inventorymanagement.springbootinventorymanagement.repository;

import com.example.inventorymanagement.springbootinventorymanagement.model.VegFruit;

import org.springframework.data.jpa.repository.JpaRepository;

public interface VegFruitRepository extends JpaRepository<VegFruit, Long>{
    
}
