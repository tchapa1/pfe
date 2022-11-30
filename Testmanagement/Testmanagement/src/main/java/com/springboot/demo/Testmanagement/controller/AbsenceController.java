


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
import com.springboot.demo.Testmanagement.repository.AbsenceRepository;
import com.springboot.demo.Testmanagement.service.SequenceGeneratorService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1")
public class AbsenceController {
	@Autowired
	private AbsenceRepository AbsenceRepository;
	
	@Autowired
	private SequenceGeneratorService sequenceGeneratorService;

	@GetMapping("/getallabsences")
	public List<Absence> getAllAbsences() {
		return AbsenceRepository.findAll();
	}

	@GetMapping("/getallabsences/{id}")
	public ResponseEntity<Absence> getAbsenceById(@PathVariable(value = "id") String AbsenceId)
			throws ResourceNotFoundException {
		Absence Absence = AbsenceRepository.findById(AbsenceId)
				.orElseThrow(() -> new ResourceNotFoundException("Absence not found for this id :: " + AbsenceId));
		return ResponseEntity.ok().body(Absence);
	}

	@PostMapping("/createabsences")
	public Absence createAbsence(@Valid @RequestBody Absence Absence) {
		Absence.setId(sequenceGeneratorService.generateSequence(Absence.SEQUENCE_NAME));
		return AbsenceRepository.save(Absence);
	}

	@PutMapping("/updateabsences/{id}")
	public ResponseEntity<Absence> updateAbsence(@PathVariable(value = "id") String AbsenceId,
			@Valid @RequestBody Absence AbsenceDetails) throws ResourceNotFoundException {
		Absence Absence = AbsenceRepository.findById(AbsenceId)
				.orElseThrow(() -> new ResourceNotFoundException("Absence not found for this id :: " + AbsenceId));

		Absence.setidemploye(AbsenceDetails.getidemploye());
		Absence.setdescription(AbsenceDetails.getdescription());
		Absence.setdatedebut(AbsenceDetails.getdatedebut());
		Absence.setdatefin(AbsenceDetails.getdatefin());
		Absence.setetat(AbsenceDetails.getetat());
		final Absence updatedAbsence = AbsenceRepository.save(Absence);
		return ResponseEntity.ok(updatedAbsence);
		

		
		
	}

	@DeleteMapping("/deleteabsences/{id}")
	public Map<String, Boolean> deleteAbsence(@PathVariable(value = "id") String AbsenceId)
			throws ResourceNotFoundException {
		Absence Absence = AbsenceRepository.findById(AbsenceId)
				.orElseThrow(() -> new ResourceNotFoundException("Absence not found for this id :: " + AbsenceId));

		AbsenceRepository.delete(Absence);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return response;
	}
}