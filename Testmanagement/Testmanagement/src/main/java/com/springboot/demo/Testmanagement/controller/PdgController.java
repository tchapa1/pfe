


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
import com.springboot.demo.Testmanagement.model.Pdg;
import com.springboot.demo.Testmanagement.repository.PdgRepository;
import com.springboot.demo.Testmanagement.service.SequenceGeneratorService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1")
public class PdgController {
	@Autowired
	private PdgRepository PdgRepository;
	
	@Autowired
	private SequenceGeneratorService sequenceGeneratorService;

	@GetMapping("/get_all_pdgs")
	public List<Pdg> getAllPdgs() {
		return PdgRepository.findAll();
	}

	@GetMapping("/get_pdgs_by_id/{id}")
	public ResponseEntity<Pdg> getPdgById(@PathVariable(value = "id") String PdgId)
			throws ResourceNotFoundException {
		Pdg Pdg = PdgRepository.findById(PdgId)
				.orElseThrow(() -> new ResourceNotFoundException("Pdg not found for this id :: " + PdgId));
		return ResponseEntity.ok().body(Pdg);
	}

	@PostMapping("/create_pdgs")
	public Pdg createPdg(@Valid @RequestBody Pdg Pdg) {
		Pdg.setId(sequenceGeneratorService.generateSequence(Pdg.SEQUENCE_NAME));
		return PdgRepository.save(Pdg);
	}

	@PutMapping("/update_pdgs/{id}")
	public ResponseEntity<Pdg> updatePdg(@PathVariable(value = "id") String PdgId,
			@Valid @RequestBody Pdg PdgDetails) throws ResourceNotFoundException {
		Pdg Pdg = PdgRepository.findById(PdgId)
				.orElseThrow(() -> new ResourceNotFoundException("Pdg not found for this id :: " + PdgId));

		Pdg.setnom(PdgDetails.getnom());
		Pdg.setprenom(PdgDetails.getprenom());
		final Pdg updatedPdg = PdgRepository.save(Pdg);
		return ResponseEntity.ok(updatedPdg);
	}

	@DeleteMapping("/delete_pdgs/{id}")
	public Map<String, Boolean> deletePdg(@PathVariable(value = "id") String PdgId)
			throws ResourceNotFoundException {
		Pdg Pdg = PdgRepository.findById(PdgId)
				.orElseThrow(() -> new ResourceNotFoundException("Pdg not found for this id :: " + PdgId));

		PdgRepository.delete(Pdg);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return response;
	}
}