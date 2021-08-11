package com.example.inventorymanagement.springbootinventorymanagement.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "goodsstatus")
public class GoodsStatus {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
}
