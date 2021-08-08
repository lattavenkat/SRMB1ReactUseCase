package com.example.inventorymanagement.springbootinventorymanagement.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import com.example.inventorymanagement.springbootinventorymanagement.exception.ResourceNotFoundException;
import com.example.inventorymanagement.springbootinventorymanagement.model.OrderDetails;
import com.example.inventorymanagement.springbootinventorymanagement.repository.OrderDetailsRepository;

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
public class OrderDetailController {  


 
    private Logger log = LoggerFactory.getLogger(OrderDetailController.class);

    @Autowired
    private OrderDetailsRepository orderdetailrepo;

    @GetMapping("/worderdetails")
    public List<OrderDetails> getAllOrderDetails() {
        log.info("Order Details Data's fetched: ");
        return orderdetailrepo.findAll();
    }

    @GetMapping("/worderdetails/{id}")
    public ResponseEntity<OrderDetails> getOrderDetailsById(@Valid @PathVariable(value = "id") Long orderLong)
            throws ResourceNotFoundException {
                OrderDetails order1 = orderdetailrepo.findById(orderLong)
                .orElseThrow(() -> new ResourceNotFoundException("Order Details not found for this id :: " + orderLong));
        log.info("Order Details Data's fetched: ");
        return ResponseEntity.ok().body(order1);
    }

    @PostMapping("/worderdetails")
    public OrderDetails createOrderDetails(@Valid @RequestBody OrderDetails order2) throws ResourceNotFoundException {
        log.info("Order Details Inserted!...");
        return orderdetailrepo.save(order2);
    }

    @PutMapping("/worderdetails/{id}")
    public ResponseEntity<OrderDetails> updateOrderDetails(@Valid @PathVariable(value = "id") Long orderLong,
            @Valid @RequestBody OrderDetails order3) throws ResourceNotFoundException {
                OrderDetails order4 = orderdetailrepo.findById(orderLong)
                .orElseThrow(() -> new ResourceNotFoundException("Order Details cannot be found for this id :: " + orderLong));

                order4.setDeliverydate(order3.getDeliverydate());
                order4.setOrdercatg(order3.getOrdercatg());
                order4.setOrdercode(order3.getOrdercode());
                order4.setOrderdate(order3.getOrderdate());
                order4.setOrderprice(order3.getOrderprice());
                order4.setOrderqty(order3.getOrderqty());
                order4.setProductcode(order3.getProductcode());
                order4.setProductname(order3.getProductname());
                order4.setSuppliername(order3.getSuppliername());
                order4.setSupplieremail(order3.getSupplieremail());
                order4.setSupplierphone(order3.getSupplierphone());
                order4.setSupplieraddress(order3.getSupplieraddress());
        final OrderDetails updatedOrder = orderdetailrepo.save(order4);
        log.info("Order Details Updated!...");
        return ResponseEntity.ok(updatedOrder);
    }

    @DeleteMapping("/worderdetails/{id}")
    public Map<String, Boolean> deleteOrderdetails(@Valid @PathVariable(value = "id") Long orderlong)
            throws ResourceNotFoundException {
                OrderDetails order3 = orderdetailrepo.findById(orderlong)
                .orElseThrow(() -> new ResourceNotFoundException("Order Details not found for this id :: " + orderlong));

                orderdetailrepo.delete(order3);
        Map<String, Boolean> response = new HashMap<>();
        response.put("Order Details Deleted", Boolean.TRUE);
        log.info("Order Details Deleted!....");
        return response;
    }

    
}
