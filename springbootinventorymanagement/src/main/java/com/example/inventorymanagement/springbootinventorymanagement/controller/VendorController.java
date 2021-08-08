package com.example.inventorymanagement.springbootinventorymanagement.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;
import com.example.inventorymanagement.springbootinventorymanagement.exception.ResourceNotFoundException;
import com.example.inventorymanagement.springbootinventorymanagement.model.Vendor;
import com.example.inventorymanagement.springbootinventorymanagement.repository.VendorRepository;

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
public class VendorController {


    private Logger log = LoggerFactory.getLogger(VendorController.class);

    @Autowired
    private VendorRepository vendorrepo;

    @GetMapping("/vendor")
    public List<Vendor> getAllVendors() {
        log.info("Vendor Data's fetched: ");
        return vendorrepo.findAll();
    }

    @GetMapping("/vendor/{id}")
    public ResponseEntity<Vendor> getVendorById(@Valid @PathVariable(value = "id") Long vendorLong)
            throws ResourceNotFoundException {
                Vendor vendor1 = vendorrepo.findById(vendorLong)
                .orElseThrow(() -> new ResourceNotFoundException("Vendor not found for this id :: " + vendorLong));
        log.info("Vendor Data's fetched: ");
        return ResponseEntity.ok().body(vendor1);
    }

    @PostMapping("/vendor")
    public Vendor createVendor(@Valid @RequestBody Vendor vendor2) throws ResourceNotFoundException {
        log.info("Vendor Inserted!...");
        return vendorrepo.save(vendor2);
    }

    @PutMapping("/vendor/{id}")
    public ResponseEntity<Vendor> updateVendor(@Valid @PathVariable(value = "id") Long vendorLong,
            @Valid @RequestBody Vendor vendor3) throws ResourceNotFoundException {
                Vendor vendor4 = vendorrepo.findById(vendorLong)
                .orElseThrow(() -> new ResourceNotFoundException("Vendor cannot be found for this id :: " + vendorLong));

                vendor4.setVendorid(vendor3.getVendorid());
                vendor4.setVendorname(vendor3.getVendorname());
                vendor4.setUsername(vendor3.getUsername());
                vendor4.setPassword(vendor3.getPassword());
                vendor4.setHint(vendor3.getHint());
                vendor4.setPhone(vendor3.getPhone());
                vendor4.setAadhar(vendor3.getAadhar());
                vendor4.setRole(vendor3.getRole());
                vendor4.setSuppliername(vendor3.getSuppliername());
                vendor4.setSuppliermail(vendor3.getSuppliermail());
                vendor4.setSupplierphone(vendor3.getSupplierphone());
                vendor4.setSupplieraddress(vendor3.getSupplieraddress());
        final Vendor updatedVendor = vendorrepo.save(vendor4);
        log.info("Vendor Updated!...");
        return ResponseEntity.ok(updatedVendor);
    }

    @DeleteMapping("/vendor/{id}")
    public Map<String, Boolean> deleteVendor(@Valid @PathVariable(value = "id") Long vendorLong)
            throws ResourceNotFoundException {
                Vendor vendor5 = vendorrepo.findById(vendorLong)
                .orElseThrow(() -> new ResourceNotFoundException("Vendor not found for this id :: " + vendorLong));

                vendorrepo.delete(vendor5);
        Map<String, Boolean> response = new HashMap<>();
        response.put("Vendor Deleted", Boolean.TRUE);
        log.info("Vendor Deleted!....");
        return response;
    }
}
