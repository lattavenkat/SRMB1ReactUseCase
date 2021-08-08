package com.example.inventorymanagement.springbootinventorymanagement.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;
import com.example.inventorymanagement.springbootinventorymanagement.exception.ResourceNotFoundException;
import com.example.inventorymanagement.springbootinventorymanagement.model.RequestGoods;
import com.example.inventorymanagement.springbootinventorymanagement.repository.RequestGoodsRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)
@RestController
@RequestMapping("/api")
public class RequestGoodsController {

    private Logger log = LoggerFactory.getLogger(RequestGoodsController.class);

    @Autowired
    private RequestGoodsRepository requestgoodsrepo;

    @GetMapping("/requestgoods")
    public List<RequestGoods> getAllRequestGoods() {
        log.info("Request Goods Data's fetched: ");
        return requestgoodsrepo.findAll();
    }

    @GetMapping("/requestgoods/{id}")
    public ResponseEntity<RequestGoods> getRequestGoodsById(@Valid @PathVariable(value = "id") Long rLong)
            throws ResourceNotFoundException {
        RequestGoods requestgoods1 = requestgoodsrepo.findById(rLong)
                .orElseThrow(() -> new ResourceNotFoundException("Request Goods not found for this id :: " + rLong));
        log.info("Request Goods Data's fetched: ");
        return ResponseEntity.ok().body(requestgoods1);
    }

    @PostMapping("/requestgoods")
    public RequestGoods createRequestGoods(@Valid @RequestBody RequestGoods requestgoods2) throws ResourceNotFoundException {
        log.info("Request Goods Inserted!...");
        return requestgoodsrepo.save(requestgoods2);
    }

    @PutMapping("/requestgoods/{id}")
    public ResponseEntity<RequestGoods> updateRequestGoods(@Valid @PathVariable(value = "id") Long rLong,
            @Valid @RequestBody RequestGoods requestgoods3) throws ResourceNotFoundException {
                RequestGoods requestgoods4 = requestgoodsrepo.findById(rLong)
                .orElseThrow(() -> new ResourceNotFoundException("Request Goods cannot be found for this id :: " + rLong));

        requestgoods4.setOrdercode(requestgoods3.getOrdercode());
        requestgoods4.setProductcode(requestgoods3.getProductcode());
        requestgoods4.setProductname(requestgoods3.getProductname());
        requestgoods4.setProductcatg(requestgoods3.getProductcatg());
        requestgoods4.setProductprice(requestgoods3.getProductprice());
        requestgoods4.setProductqty(requestgoods3.getProductqty());
        requestgoods4.setRequestDate(requestgoods3.getRequestDate());
        requestgoods4.setVendorId(requestgoods3.getVendorId());
        requestgoods4.setVendorName(requestgoods3.getVendorName());
        final RequestGoods updaterequestgoods = requestgoodsrepo.save(requestgoods4);
        log.info("Request Goods Updated!...");
        return ResponseEntity.ok(updaterequestgoods);
    }

    @DeleteMapping("/requestgoods/{id}")
    public Map<String, Boolean> deleteRequestGoods(@Valid @PathVariable(value = "id") Long rLong)
            throws ResourceNotFoundException {
                RequestGoods updaterequestgood5 = requestgoodsrepo.findById(rLong)
                .orElseThrow(() -> new ResourceNotFoundException("Request Goods not found for this id :: " + rLong));

        requestgoodsrepo.delete(updaterequestgood5);
        Map<String, Boolean> response = new HashMap<>();
        response.put("Request Goods Deleted", Boolean.TRUE);
        log.info("Request Goods Deleted!....");
        return response;
    }
}
