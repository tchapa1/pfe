

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
import com.springboot.demo.Testmanagement.model.Avancementprojet;
import com.springboot.demo.Testmanagement.repository.AvancementprojetRepository;
import com.springboot.demo.Testmanagement.service.SequenceGeneratorService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1")
public class AvancementprojetController {
	@Autowired
	private AvancementprojetRepository AvancementprojetRepository;
	
	@Autowired
	private SequenceGeneratorService sequenceGeneratorService;

	@GetMapping("/get_all_avancementprojets")
	public List<Avancementprojet> getAllAvancementprojets() {
		return AvancementprojetRepository.findAll();
	}

	@GetMapping("/get_avancementprojets_by_id/{id}")
	public ResponseEntity<Avancementprojet> getAvancementprojetById(@PathVariable(value = "id") Long AvancementprojetId)
			throws ResourceNotFoundException {
		Avancementprojet Avancementprojet = AvancementprojetRepository.findById(AvancementprojetId)
				.orElseThrow(() -> new ResourceNotFoundException("Avancementprojet not found for this id :: " + AvancementprojetId));
		return ResponseEntity.ok().body(Avancementprojet);
	}

	@PostMapping("/create_avancementprojets")
	public Avancementprojet createAvancementprojet(@Valid @RequestBody Avancementprojet Avancementprojet) {
		Avancementprojet.setId(sequenceGeneratorService.generateSequence(Avancementprojet.SEQUENCE_NAME));
		return AvancementprojetRepository.save(Avancementprojet);
	}

	@PutMapping("/update_avancementprojets/{id}")
	public ResponseEntity<Avancementprojet> updateAvancementprojet(@PathVariable(value = "id") Long AvancementprojetId,
			@Valid @RequestBody Avancementprojet AvancementprojetDetails) throws ResourceNotFoundException {
		Avancementprojet Avancementprojet = AvancementprojetRepository.findById(AvancementprojetId)
				.orElseThrow(() -> new ResourceNotFoundException("Avancementprojet not found for this id :: " + AvancementprojetId));

		Avancementprojet.settitre(AvancementprojetDetails.gettitre());
		Avancementprojet.setdescription(AvancementprojetDetails.getdescription());
		Avancementprojet.setidprojet(AvancementprojetDetails.getidprojet());
		Avancementprojet.setdatecreation(AvancementprojetDetails.getdatecreation());
		final Avancementprojet updatedAvancementprojet = AvancementprojetRepository.save(Avancementprojet);
		return ResponseEntity.ok(updatedAvancementprojet);
	}

	@DeleteMapping("/delete_avancementprojets/{id}")
	public Map<String, Boolean> deleteAvancementprojet(@PathVariable(value = "id") Long AvancementprojetId)
			throws ResourceNotFoundException {
		Avancementprojet Avancementprojet = AvancementprojetRepository.findById(AvancementprojetId)
				.orElseThrow(() -> new ResourceNotFoundException("Avancementprojet not found for this id :: " + AvancementprojetId));

		AvancementprojetRepository.delete(Avancementprojet);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return response;
	}
}