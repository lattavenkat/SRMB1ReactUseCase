package com.example.inventorymanagement.springbootinventorymanagement.repository;

import com.example.inventorymanagement.springbootinventorymanagement.model.AddManagerInfo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AddManagerInfoRepo extends JpaRepository<AddManagerInfo,Long>{
    
}
