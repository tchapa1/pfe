


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
import com.springboot.demo.Testmanagement.model.Tache;
import com.springboot.demo.Testmanagement.repository.TacheRepository;
import com.springboot.demo.Testmanagement.service.SequenceGeneratorService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1")
public class TacheController {
	@Autowired
	private TacheRepository TacheRepository;
	
	@Autowired
	private SequenceGeneratorService sequenceGeneratorService;

	@GetMapping("/get_all_taches")
	public List<Tache> getAllTaches() {
		return TacheRepository.findAll();
	}

	@GetMapping("/get_taches_taches_by_id/{id}")
	public ResponseEntity<Tache> getTacheById(@PathVariable(value = "id") String TacheId)
			throws ResourceNotFoundException {
		Tache Tache = TacheRepository.findById(TacheId)
				.orElseThrow(() -> new ResourceNotFoundException("Tache not found for this id :: " + TacheId));
		return ResponseEntity.ok().body(Tache);
	}

	@PostMapping("/create_taches")
	public Tache createTache(@Valid @RequestBody Tache Tache) {
		Tache.setId(sequenceGeneratorService.generateSequence(Tache.SEQUENCE_NAME));
		return TacheRepository.save(Tache);
	}

	@PutMapping("/update_taches/{id}")
	public ResponseEntity<Tache> updateTache(@PathVariable(value = "id") String TacheId,
			@Valid @RequestBody Tache TacheDetails) throws ResourceNotFoundException {
		Tache Tache = TacheRepository.findById(TacheId)
				.orElseThrow(() -> new ResourceNotFoundException("Tache not found for this id :: " + TacheId));

		Tache.setnom(TacheDetails.getnom());
		Tache.setdescription(TacheDetails.getdescription());
		Tache.setdatecreation(TacheDetails.getdatecreation());
		Tache.setidprojet(TacheDetails.getidprojet());
		Tache.setetat(TacheDetails.getetat());
		final Tache updatedTache = TacheRepository.save(Tache);
		return ResponseEntity.ok(updatedTache);
	}

	@DeleteMapping("/delete_taches/{id}")
	public Map<String, Boolean> deleteTache(@PathVariable(value = "id") String TacheId)
			throws ResourceNotFoundException {
		Tache Tache = TacheRepository.findById(TacheId)
				.orElseThrow(() -> new ResourceNotFoundException("Tache not found for this id :: " + TacheId));

		TacheRepository.delete(Tache);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return response;
	}
}