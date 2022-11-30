



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
import com.springboot.demo.Testmanagement.model.Projet;
import com.springboot.demo.Testmanagement.repository.ProjetRepository;
import com.springboot.demo.Testmanagement.service.SequenceGeneratorService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1")
public class ProjetController {
	@Autowired
	private ProjetRepository ProjetRepository;
	
	@Autowired
	private SequenceGeneratorService sequenceGeneratorService;

	@GetMapping("/get_all_projets")
	public List<Projet> getAllProjets() {
		return ProjetRepository.findAll();
	}

	@GetMapping("/get_projets_by_id/{id}")
	public ResponseEntity<Projet> getProjetById(@PathVariable(value = "id") String ProjetId)
			throws ResourceNotFoundException {
		Projet Projet = ProjetRepository.findById(ProjetId)
				.orElseThrow(() -> new ResourceNotFoundException("Projet not found for this id :: " + ProjetId));
		return ResponseEntity.ok().body(Projet);
	}

	@PostMapping("/create_projets")
	public Projet createProjet(@Valid @RequestBody Projet Projet) {
		Projet.setId(sequenceGeneratorService.generateSequence(Projet.SEQUENCE_NAME));
		return ProjetRepository.save(Projet);
	}

	@PutMapping("/update_projets/{id}")
	public ResponseEntity<Projet> updateProjet(@PathVariable(value = "id") String ProjetId,
			@Valid @RequestBody Projet ProjetDetails) throws ResourceNotFoundException {
		Projet Projet = ProjetRepository.findById(ProjetId)
				.orElseThrow(() -> new ResourceNotFoundException("Projet not found for this id :: " + ProjetId));

		Projet.setnom(ProjetDetails.getnom());
		Projet.setdescription(ProjetDetails.getdescription());
		Projet.setdatecreation(ProjetDetails.getdatecreation());
		Projet.setetat(ProjetDetails.getetat());
		
		
		final Projet updatedProjet = ProjetRepository.save(Projet);
		return ResponseEntity.ok(updatedProjet);
	}

	@DeleteMapping("/delete_projets/{id}")
	public Map<String, Boolean> deleteProjet(@PathVariable(value = "id") String ProjetId)
			throws ResourceNotFoundException {
		Projet Projet = ProjetRepository.findById(ProjetId)
				.orElseThrow(() -> new ResourceNotFoundException("Projet not found for this id :: " + ProjetId));

		ProjetRepository.delete(Projet);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return response;
	}
}