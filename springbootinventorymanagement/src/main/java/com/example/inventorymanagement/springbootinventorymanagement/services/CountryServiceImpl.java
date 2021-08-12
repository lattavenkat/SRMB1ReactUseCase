package com.example.inventorymanagement.springbootinventorymanagement.services;

import java.util.List;

import javax.transaction.Transactional;

import com.example.inventorymanagement.springbootinventorymanagement.model.Country;
import com.example.inventorymanagement.springbootinventorymanagement.repository.CountryRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class CountryServiceImpl implements CountryService {
	
	@Autowired
	private CountryRepository repo;

	@Override
	public List<Country> getCountries() {
		// TODO Auto-generated method stub
		return repo.findAll();
	}

}
