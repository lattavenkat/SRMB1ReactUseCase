package com.example.inventorymanagement.springbootinventorymanagement.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import javax.validation.Valid;
import com.example.inventorymanagement.springbootinventorymanagement.exception.ResourceNotFoundException;
import com.example.inventorymanagement.springbootinventorymanagement.model.Manager;
import com.example.inventorymanagement.springbootinventorymanagement.repository.ManagerRepository;
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
public class ManagerController {

    private Logger log = LoggerFactory.getLogger(ManagerController.class);

    @Autowired
    private ManagerRepository managerrepo;

    @GetMapping("/manager")
    public List<Manager> getAllManagers() {
        log.info("Manager Data's fetched: ");
        return managerrepo.findAll();
    }

    @GetMapping("/manager/{id}")
    public ResponseEntity<Manager> getManagerById(@Valid @PathVariable(value = "id") Long mLong)
            throws ResourceNotFoundException {
                Manager manager1 = managerrepo.findById(mLong)
                .orElseThrow(() -> new ResourceNotFoundException("Manager not found for this id :: " + mLong));
        log.info("Manager Data's fetched: ");
        return ResponseEntity.ok().body(manager1);
    }

    @PostMapping("/manager")
    public Manager createManager(@Valid @RequestBody Manager manager2) throws ResourceNotFoundException {
        log.info("Manager Inserted!...");
        return managerrepo.save(manager2);
    }

    @PutMapping("/manager/{id}")
    public ResponseEntity<Manager> updateManager(@Valid @PathVariable(value = "id") Long mLong,
            @Valid @RequestBody Manager manager3) throws ResourceNotFoundException {
                Manager manager4 = managerrepo.findById(mLong).orElseThrow(
                () -> new ResourceNotFoundException("Manager cannot be found for this id :: " + mLong));

        manager4.setUsername(manager3.getUsername());
        manager4.setPassword(manager3.getPassword());
        manager4.setHint(manager3.getHint());
        manager4.setPhone(manager3.getPhone());
        manager4.setAadhar(manager3.getAadhar());
        manager4.setRole(manager3.getRole());
        final Manager updatedManager = managerrepo.save(manager4);
        log.info("Manager Updated!...");
        return ResponseEntity.ok(updatedManager);
    }

    @DeleteMapping("/manager/{id}")
    public Map<String, Boolean> deleteManager(@Valid @PathVariable(value = "id") Long mLong)
            throws ResourceNotFoundException {
                Manager manager5 = managerrepo.findById(mLong)
                .orElseThrow(() -> new ResourceNotFoundException("Manager not found for this id :: " + mLong));

        managerrepo.delete(manager5);
        Map<String, Boolean> response = new HashMap<>();
        response.put("Manager Deleted", Boolean.TRUE);
        log.info("Manager Deleted!....");
        return response;
    }
}
