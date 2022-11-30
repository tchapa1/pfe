


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
import com.springboot.demo.Testmanagement.model.Groupe;
import com.springboot.demo.Testmanagement.repository.GroupeRepository;
import com.springboot.demo.Testmanagement.service.SequenceGeneratorService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1")
public class GroupeController {
	@Autowired
	private GroupeRepository GroupeRepository;
	
	@Autowired
	private SequenceGeneratorService sequenceGeneratorService;

	@GetMapping("/get_all_groupes")
	public List<Groupe> getAllGroupes() {
		return GroupeRepository.findAll();
	}

	@GetMapping("/get_groupes_by_id/{id}")
	public ResponseEntity<Groupe> getGroupeById(@PathVariable(value = "id") String GroupeId)
			throws ResourceNotFoundException {
		Groupe Groupe = GroupeRepository.findById(GroupeId)
				.orElseThrow(() -> new ResourceNotFoundException("Groupe not found for this id :: " + GroupeId));
		return ResponseEntity.ok().body(Groupe);
	}

	@PostMapping("/create_groupes")
	public Groupe createGroupe(@Valid @RequestBody Groupe Groupe) {
		Groupe.setId(sequenceGeneratorService.generateSequence(Groupe.SEQUENCE_NAME));
		return GroupeRepository.save(Groupe);
	}

	@PutMapping("/update_groupes/{id}")
	public ResponseEntity<Groupe> updateGroupe(@PathVariable(value = "id") Long GroupeId,
			@Valid @RequestBody Groupe GroupeDetails) throws ResourceNotFoundException {
		Groupe Groupe = GroupeRepository.findById(GroupeId)
				.orElseThrow(() -> new ResourceNotFoundException("Groupe not found for this id :: " + GroupeId));

		Groupe.setnom(GroupeDetails.getnom());
		Groupe.setdescription(GroupeDetails.getdescription());
		Groupe.setdatecreation(GroupeDetails.getdatecreation());
		Groupe.setetat(GroupeDetails.getetat());
		final Groupe updatedGroupe = GroupeRepository.save(Groupe);
		return ResponseEntity.ok(updatedGroupe);
	}

	@DeleteMapping("/delete_groupes/{id}")
	public Map<String, Boolean> deleteGroupe(@PathVariable(value = "id") String GroupeId)
			throws ResourceNotFoundException {
		Groupe Groupe = GroupeRepository.findById(GroupeId)
				.orElseThrow(() -> new ResourceNotFoundException("Groupe not found for this id :: " + GroupeId));

		GroupeRepository.delete(Groupe);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return response;
	}
}