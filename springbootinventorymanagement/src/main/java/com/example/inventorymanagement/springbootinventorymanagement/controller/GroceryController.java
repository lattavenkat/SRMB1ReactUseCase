package com.example.inventorymanagement.springbootinventorymanagement.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import com.example.inventorymanagement.springbootinventorymanagement.exception.ResourceNotFoundException;
import com.example.inventorymanagement.springbootinventorymanagement.model.Grocery;
import com.example.inventorymanagement.springbootinventorymanagement.repository.GroceryRepository;

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
public class GroceryController {  

    private Logger log = LoggerFactory.getLogger(GroceryController.class);

    @Autowired
    private GroceryRepository groceryrepo;

    @GetMapping("/wgrocery")
    public List<Grocery> getAllGrocery() {
        log.info("Grocery Data's fetched: ");
        return groceryrepo.findAll();
    }

    @GetMapping("/wgrocery/{id}")
    public ResponseEntity<Grocery> getGroceryById(@Valid @PathVariable(value = "id") Long gLong)
            throws ResourceNotFoundException {
                Grocery gr1 = groceryrepo.findById(gLong)
                .orElseThrow(() -> new ResourceNotFoundException("Grocery not found for this id :: " + gLong));
        log.info("Grocery Data's fetched: ");
        return ResponseEntity.ok().body(gr1);
    }

    @PostMapping("/wgrocery")
    public Grocery createGrocery(@Valid @RequestBody Grocery gr2) throws ResourceNotFoundException {
        log.info("Grocery Inserted!...");
        return groceryrepo.save(gr2);
    }

    @PutMapping("/wgrocery/{id}")
    public ResponseEntity<Grocery> updateGrocery(@Valid @PathVariable(value = "id") Long gLong,
            @Valid @RequestBody Grocery gr3) throws ResourceNotFoundException {
                Grocery gr4 = groceryrepo.findById(gLong)
                .orElseThrow(() -> new ResourceNotFoundException("Grocery cannot be found for this id :: " + gLong));

                gr4.setPcatg(gr3.getPcatg());
                gr4.setPcode(gr3.getPcode());
                gr4.setPdesc(gr3.getPdesc());
                gr4.setPname(gr3.getPname());
                gr4.setPprice(gr3.getPprice());
                gr4.setPqty(gr3.getPqty());
                gr4.setManuDate(gr3.getManuDate());
                gr4.setExpDate(gr3.getExpDate());
                gr4.setGordercode(gr3.getGordercode());
        final Grocery updatedGrocery = groceryrepo.save(gr4);
        log.info("Grocery Updated!...");
        return ResponseEntity.ok(updatedGrocery);
    }

    @DeleteMapping("/wgrocery/{id}")
    public Map<String, Boolean> deleteGrocery(@Valid @PathVariable(value = "id") Long gLong)
            throws ResourceNotFoundException {
                Grocery gr5 = groceryrepo.findById(gLong)
                .orElseThrow(() -> new ResourceNotFoundException("Grocery not found for this id :: " + gLong));

                groceryrepo.delete(gr5);
        Map<String, Boolean> response = new HashMap<>();
        response.put("Grocery deleted", Boolean.TRUE);
        log.info("Grocery Deleted!....");
        return response;
    }
}
