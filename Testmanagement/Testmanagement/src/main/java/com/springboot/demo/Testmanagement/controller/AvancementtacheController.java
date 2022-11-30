


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
import com.springboot.demo.Testmanagement.model.Avancementtache;
import com.springboot.demo.Testmanagement.repository.AvancementtacheRepository;
import com.springboot.demo.Testmanagement.service.SequenceGeneratorService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1")
public class AvancementtacheController {
	@Autowired
	private AvancementtacheRepository AvancementtacheRepository;
	
	@Autowired
	private SequenceGeneratorService sequenceGeneratorService;

	@GetMapping("/get_all_avancementtaches")
	public List<Avancementtache> getAllAvancementtaches() {
		return AvancementtacheRepository.findAll();
	}

	@GetMapping("/get_avancementtaches_by_id/{id}")
	public ResponseEntity<Avancementtache> getAvancementtacheById(@PathVariable(value = "id") Long AvancementtacheId)
			throws ResourceNotFoundException {
		Avancementtache Avancementtache = AvancementtacheRepository.findById(AvancementtacheId)
				.orElseThrow(() -> new ResourceNotFoundException("Avancementtache not found for this id :: " + AvancementtacheId));
		return ResponseEntity.ok().body(Avancementtache);
	}

	@PostMapping("/create_avancementtaches")
	public Avancementtache createAvancementtache(@Valid @RequestBody Avancementtache Avancementtache) {
		Avancementtache.setId(sequenceGeneratorService.generateSequence(Avancementtache.SEQUENCE_NAME));
		return AvancementtacheRepository.save(Avancementtache);
	}

	@PutMapping("/update_avancementtaches/{id}")
	public ResponseEntity<Avancementtache> updateAvancementtache(@PathVariable(value = "id") Long AvancementtacheId,
			@Valid @RequestBody Avancementtache AvancementtacheDetails) throws ResourceNotFoundException {
		Avancementtache Avancementtache = AvancementtacheRepository.findById(AvancementtacheId)
				.orElseThrow(() -> new ResourceNotFoundException("Avancementtache not found for this id :: " + AvancementtacheId));

		Avancementtache.settitre(AvancementtacheDetails.gettitre());
		Avancementtache.setdescription(AvancementtacheDetails.getdescription());
		Avancementtache.setidtache(AvancementtacheDetails.getidtache());
		Avancementtache.setdatecreation(AvancementtacheDetails.getdatecreation());
		final Avancementtache updatedAvancementtache = AvancementtacheRepository.save(Avancementtache);
		return ResponseEntity.ok(updatedAvancementtache);
	}

	@DeleteMapping("/delete_avancementtaches/{id}")
	public Map<String, Boolean> deleteAvancementtache(@PathVariable(value = "id") Long AvancementtacheId)
			throws ResourceNotFoundException {
		Avancementtache Avancementtache = AvancementtacheRepository.findById(AvancementtacheId)
				.orElseThrow(() -> new ResourceNotFoundException("Avancementtache not found for this id :: " + AvancementtacheId));

		AvancementtacheRepository.delete(Avancementtache);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return response;
	}
}