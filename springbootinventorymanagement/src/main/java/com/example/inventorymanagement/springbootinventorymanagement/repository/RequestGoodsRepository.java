package com.example.inventorymanagement.springbootinventorymanagement.repository;

import com.example.inventorymanagement.springbootinventorymanagement.model.RequestGoods;

import org.springframework.data.jpa.repository.JpaRepository;

public interface RequestGoodsRepository extends JpaRepository<RequestGoods, Long> {
    
}
