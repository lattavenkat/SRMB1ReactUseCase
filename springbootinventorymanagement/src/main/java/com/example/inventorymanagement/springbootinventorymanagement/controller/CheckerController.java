package com.example.inventorymanagement.springbootinventorymanagement.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import com.example.inventorymanagement.springbootinventorymanagement.exception.ResourceNotFoundException;
import com.example.inventorymanagement.springbootinventorymanagement.model.Checker;
import com.example.inventorymanagement.springbootinventorymanagement.repository.CheckerRepository;

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
public class CheckerController {

    private Logger log = LoggerFactory.getLogger(CheckerController.class);

    @Autowired
    private CheckerRepository checkerrepo;

    @GetMapping("/checker")
    public List<Checker> getAllAdmins() {
        log.info("Checker Data's fetched: ");
        return checkerrepo.findAll();
    }

    @GetMapping("/checker/{id}")
    public ResponseEntity<Checker> getAdminById(@Valid @PathVariable(value = "id") Long cLong)
            throws ResourceNotFoundException {
                Checker checker1 = checkerrepo.findById(cLong)
                .orElseThrow(() -> new ResourceNotFoundException("Checker not found for this id :: " + cLong));
        log.info("Checker Data's fetched: ");
        return ResponseEntity.ok().body(checker1);
    }

    @PostMapping("/checker")
    public Checker createAdmin(@Valid @RequestBody Checker checker2) throws ResourceNotFoundException {
        log.info("Checker Inserted!...");
        return checkerrepo.save(checker2);
    }

    @PutMapping("/checker/{id}")
    public ResponseEntity<Checker> updateAdmin(@Valid @PathVariable(value = "id") Long cLong,
            @Valid @RequestBody Checker checker3) throws ResourceNotFoundException {
                Checker checker4 = checkerrepo.findById(cLong)
                .orElseThrow(() -> new ResourceNotFoundException("Checker cannot be found for this id :: " + cLong));

        checker4.setUsername(checker3.getUsername());
        checker4.setPassword(checker3.getPassword());
        checker4.setHint(checker3.getHint());
        checker4.setPhone(checker3.getPhone());
        checker4.setAadhar(checker3.getAadhar());
        checker4.setRole(checker3.getRole());
        final Checker updatedAdmin = checkerrepo.save(checker4);
        log.info("Checker Updated!...");
        return ResponseEntity.ok(updatedAdmin);
    }

    @DeleteMapping("/checker/{id}")
    public Map<String, Boolean> deleteChecker(@Valid @PathVariable(value = "id") Long cLong)
            throws ResourceNotFoundException {
                Checker checker5 = checkerrepo.findById(cLong)
                .orElseThrow(() -> new ResourceNotFoundException("Checker not found for this id :: " + cLong));

        checkerrepo.delete(checker5);
        Map<String, Boolean> response = new HashMap<>();
        response.put("Checker Deleted", Boolean.TRUE);
        log.info("Checker Deleted!....");
        return response;
    }
}
