package com.example.inventorymanagement.springbootinventorymanagement.controller;

import java.util.List;

import com.example.inventorymanagement.springbootinventorymanagement.model.RequestGoods;
import com.example.inventorymanagement.springbootinventorymanagement.repository.RequestGoodsRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class RequestGoodsCntrl {
@Autowired
    private RequestGoodsRepo rrepo;

    @PostMapping("/requestgoods")
    public RequestGoods createrequestGoods(@RequestBody RequestGoods reqgoods) {
        return rrepo.save(reqgoods);
    }
    @GetMapping(value = "/requestgoods")
    public ResponseEntity<List<RequestGoods>> fetchAllgoods() {
        return new ResponseEntity<List<RequestGoods>>(rrepo.findAll(), HttpStatus.OK);
    }
            
}
