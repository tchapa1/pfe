
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
import com.springboot.demo.Testmanagement.model.Chef;
import com.springboot.demo.Testmanagement.repository.ChefRepository;
import com.springboot.demo.Testmanagement.service.SequenceGeneratorService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1")
public class ChefController {
	@Autowired
	private ChefRepository ChefRepository;
	
	@Autowired
	private SequenceGeneratorService sequenceGeneratorService;

	@GetMapping("/get_all_chefs")
	public List<Chef> getAllChefs() {
		return ChefRepository.findAll();
	}

	@GetMapping("/get_chefs_by_id/{id}")
	public ResponseEntity<Chef> getChefById(@PathVariable(value = "id") Long ChefId)
			throws ResourceNotFoundException {
		Chef Chef = ChefRepository.findById(ChefId)
				.orElseThrow(() -> new ResourceNotFoundException("Chef not found for this id :: " + ChefId));
		return ResponseEntity.ok().body(Chef);
	}

	@PostMapping("/create_chefs")
	public Chef createChef(@Valid @RequestBody Chef Chef) {
		Chef.setId(sequenceGeneratorService.generateSequence(Chef.SEQUENCE_NAME));
		return ChefRepository.save(Chef);
	}

	@PutMapping("/update_chefs/{id}")
	public ResponseEntity<Chef> updateChef(@PathVariable(value = "id") Long ChefId,
			@Valid @RequestBody Chef ChefDetails) throws ResourceNotFoundException {
		Chef Chef = ChefRepository.findById(ChefId)
				.orElseThrow(() -> new ResourceNotFoundException("Chef not found for this id :: " + ChefId));

		Chef.setnom(ChefDetails.getnom());
		Chef.setprenom(ChefDetails.getprenom());
		final Chef updatedChef = ChefRepository.save(Chef);
		return ResponseEntity.ok(updatedChef);
	}

	@DeleteMapping("/delete_chefs/{id}")
	public Map<String, Boolean> deleteChef(@PathVariable(value = "id") Long ChefId)
			throws ResourceNotFoundException {
		Chef Chef = ChefRepository.findById(ChefId)
				.orElseThrow(() -> new ResourceNotFoundException("Chef not found for this id :: " + ChefId));

		ChefRepository.delete(Chef);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return response;
	}
}