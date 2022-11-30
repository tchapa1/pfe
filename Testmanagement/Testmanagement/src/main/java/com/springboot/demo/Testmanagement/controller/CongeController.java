


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
import com.springboot.demo.Testmanagement.model.Conge;
import com.springboot.demo.Testmanagement.repository.CongeRepository;
import com.springboot.demo.Testmanagement.service.SequenceGeneratorService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1")
public class CongeController {
	@Autowired
	private CongeRepository CongeRepository;
	
	@Autowired
	private SequenceGeneratorService sequenceGeneratorService;

	@GetMapping("/getallConges")
	public List<Conge> getAllConges() {
		return CongeRepository.findAll();
	}

	@GetMapping("/getCongebyid/{id}")
	public ResponseEntity<Conge> getCongeById(@PathVariable(value = "id") String CongeId)
			throws ResourceNotFoundException {
		Conge Conge = CongeRepository.findById(CongeId)
				.orElseThrow(() -> new ResourceNotFoundException("Conge not found for this id :: " + CongeId));
		return ResponseEntity.ok().body(Conge);
	}

	@PostMapping("/createConges")
	public Conge createConge(@Valid @RequestBody Conge Conge) {
		Conge.setId(sequenceGeneratorService.generateSequence(Conge.SEQUENCE_NAME));
		return CongeRepository.save(Conge);
	}

	@PutMapping("/updateConges/{id}")
	public ResponseEntity<Conge> updateConge(@PathVariable(value = "id") String CongeId,
			@Valid @RequestBody Conge CongeDetails) throws ResourceNotFoundException {
		Conge Conge = CongeRepository.findById(CongeId)
				.orElseThrow(() -> new ResourceNotFoundException("Conge not found for this id :: " + CongeId));

		Conge.setidemploye(CongeDetails.getidemploye());
		Conge.setdescription(CongeDetails.getdescription());
		Conge.setdatedebut(CongeDetails.getdatedebut());
		Conge.setdatefin(CongeDetails.getdatefin());
		Conge.setetat(CongeDetails.getetat());
		final Conge updatedConge = CongeRepository.save(Conge);
		return ResponseEntity.ok(updatedConge);
	}

	@DeleteMapping("/deleteConges/{id}")
	public Map<String, Boolean> deleteConge(@PathVariable(value = "id") String CongeId)
			throws ResourceNotFoundException {
		Conge Conge = CongeRepository.findById(CongeId)
				.orElseThrow(() -> new ResourceNotFoundException("Conge not found for this id :: " + CongeId));

		CongeRepository.delete(Conge);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return response;
	}
}