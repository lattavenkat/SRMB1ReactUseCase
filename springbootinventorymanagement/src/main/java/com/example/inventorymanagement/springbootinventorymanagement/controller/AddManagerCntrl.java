package com.example.inventorymanagement.springbootinventorymanagement.controller;

// import java.util.List;
import com.example.inventorymanagement.springbootinventorymanagement.model.AddManagerInfo;
import com.example.inventorymanagement.springbootinventorymanagement.repository.AddManagerInfoRepo;

import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.http.HttpStatus;
// import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
// import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class AddManagerCntrl {
    @Autowired
    private AddManagerInfoRepo managerrepo;

    @PostMapping("/managerinfo")
    public AddManagerInfo createmanagerinfo(@RequestBody AddManagerInfo managerinfo) {
        return managerrepo.save(managerinfo);
    }
    // @GetMapping(value = "/addmanagerinfo")
    // public ResponseEntity<List<AddManagerInfo>> fetchAllmanagerinfo() {
    //     return new ResponseEntity<List<AddManagerInfo>>(managerrepo.findAll(), HttpStatus.OK);
    // }
}
