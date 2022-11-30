


package com.springboot.demo.Testmanagement.controller;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

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

import com.springboot.demo.Testmanagement.exception.ResourceNotFoundException;
import com.springboot.demo.Testmanagement.model.Absence;
import com.springboot.demo.Testmanagement.model.Admin;
import com.springboot.demo.Testmanagement.repository.AdminRepository;
import com.springboot.demo.Testmanagement.service.SequenceGeneratorService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1")
public class AdminController {
	@Autowired
	private AdminRepository AdminRepository;
	
	@Autowired
	private SequenceGeneratorService sequenceGeneratorService;

	@GetMapping("/get_all_admins")
	public List<Admin> getAllAdmins() {
		return AdminRepository.findAll();
	}

	@GetMapping("/get_admins_by_id/{id}")
	public ResponseEntity<Admin> getAdminById(@PathVariable(value = "id") String AdminId)
			throws ResourceNotFoundException {
		Admin Admin = AdminRepository.findById(AdminId)
				.orElseThrow(() -> new ResourceNotFoundException("Admin not found for this id :: " + AdminId));
		return ResponseEntity.ok().body(Admin);
	}

	@PostMapping("/create_admins")
	public Admin createAdmin(@Valid @RequestBody Admin Admin) {
		Admin.setId(sequenceGeneratorService.generateSequence(Admin.SEQUENCE_NAME));
		return AdminRepository.save(Admin);
	}
	

	

	@PutMapping("/update_admins/{id}")
	public ResponseEntity<Admin> updateAdmin(@PathVariable(value = "id") String AdminId,
			@Valid @RequestBody Admin AdminDetails) throws ResourceNotFoundException {
		Admin Admin = AdminRepository.findById(AdminId)
				.orElseThrow(() -> new ResourceNotFoundException("Admin not found for this id :: " + AdminId));

		Admin.setnom(AdminDetails.getnom());
		Admin.setprenom(AdminDetails.getprenom());
		final Admin updatedAdmin = AdminRepository.save(Admin);
		return ResponseEntity.ok(updatedAdmin);
	}

	@DeleteMapping("/delete_admins_by_id/{id}")
	public Map<String, Boolean> deleteAdmin(@PathVariable(value = "id") String AdminId)
			throws ResourceNotFoundException {
		Admin Admin = AdminRepository.findById(AdminId)
				.orElseThrow(() -> new ResourceNotFoundException("Admin not found for this id :: " + AdminId));

		AdminRepository.delete(Admin);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return response;
	}
}