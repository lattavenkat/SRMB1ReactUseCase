package com.example.inventorymanagement.springbootinventorymanagement.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import com.example.inventorymanagement.springbootinventorymanagement.exception.ResourceNotFoundException;
import com.example.inventorymanagement.springbootinventorymanagement.model.VegFruit;
import com.example.inventorymanagement.springbootinventorymanagement.repository.VegFruitRepository;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.data.domain.Page;  
// import org.springframework.data.domain.Pageable;  
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
public class VegFruitController {

    private Logger log = LoggerFactory.getLogger(VegFruitController.class);

    @Autowired
    private VegFruitRepository vegfruitrepo;

    @GetMapping("/wvegfruit")
    public List<VegFruit> getAllVegFruits() {
        log.info("VegFruit Data's fetched: ");
        return vegfruitrepo.findAll();
    }

    @GetMapping("/wvegfruit/{id}")
    public ResponseEntity<VegFruit> getVegFruitById(@Valid @PathVariable(value = "id") Long vfLong)
            throws ResourceNotFoundException {
        VegFruit vf1 = vegfruitrepo.findById(vfLong)
                .orElseThrow(() -> new ResourceNotFoundException("VegFruit not found for this id :: " + vfLong));
        log.info("VegFruit Data's fetched: ");
        return ResponseEntity.ok().body(vf1);
    }

    @PostMapping("/wvegfruit")
    public VegFruit createVegFruit(@Valid @RequestBody VegFruit vf2) throws ResourceNotFoundException {
        log.info("VegFruit Inserted!...");
        return vegfruitrepo.save(vf2);
    }

    @PutMapping("/wvegfruit/{id}")
    public ResponseEntity<VegFruit> updateVegFruit(@Valid @PathVariable(value = "id") Long vfLong,
            @Valid @RequestBody VegFruit vf3) throws ResourceNotFoundException {
        VegFruit vf4 = vegfruitrepo.findById(vfLong)
                .orElseThrow(() -> new ResourceNotFoundException("VegFruit cannot be found for this id :: " + vfLong));

                vf4.setPcatg(vf3.getPcatg());
                vf4.setPcode(vf3.getPcode());
                vf4.setPdesc(vf3.getPdesc());
                vf4.setPname(vf3.getPname());
                vf4.setPprice(vf3.getPprice());
                vf4.setPqty(vf3.getPqty());
                vf4.setStockin(vf3.getStockin());
                vf4.setStockout(vf3.getStockout());
                vf4.setVfordercode(vf3.getVfordercode());
        final VegFruit updatedVegfruit = vegfruitrepo.save(vf4);
        log.info("VegFruit Updated!...");
        return ResponseEntity.ok(updatedVegfruit);
    }

    @DeleteMapping("/wvegfruit/{id}")
    public Map<String, Boolean> deleteVegFruit(@Valid @PathVariable(value = "id") Long vfLong)
            throws ResourceNotFoundException {
        VegFruit vf3 = vegfruitrepo.findById(vfLong)
                .orElseThrow(() -> new ResourceNotFoundException("VegFruit not found for this id :: " + vfLong));

        vegfruitrepo.delete(vf3);
        Map<String, Boolean> response = new HashMap<>();
        response.put("VegFruit deleted", Boolean.TRUE);
        log.info("VegFruit Deleted!....");
        return response;
    }
}
