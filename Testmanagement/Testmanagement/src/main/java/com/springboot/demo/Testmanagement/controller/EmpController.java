

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
import com.springboot.demo.Testmanagement.model.Emp;
import com.springboot.demo.Testmanagement.repository.EmpRepository;
import com.springboot.demo.Testmanagement.service.SequenceGeneratorService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1")
public class EmpController {
	@Autowired
	private EmpRepository EmpRepository;
	
	@Autowired
	private SequenceGeneratorService sequenceGeneratorService;

	@GetMapping("/get_all_emps")
	public List<Emp> getAllEmps() {
		return EmpRepository.findAll();
	}

	@GetMapping("/get_emps_by_id/{id}")
	public ResponseEntity<Emp> getEmpById(@PathVariable(value = "id") Long EmpId)
			throws ResourceNotFoundException {
		Emp Emp = EmpRepository.findById(EmpId)
				.orElseThrow(() -> new ResourceNotFoundException("Emp not found for this id :: " + EmpId));
		return ResponseEntity.ok().body(Emp);
	}

	@PostMapping("/create_emps")
	public Emp createEmp(@Valid @RequestBody Emp Emp) {
		Emp.setId(sequenceGeneratorService.generateSequence(Emp.SEQUENCE_NAME));
		return EmpRepository.save(Emp);
	}

	@PutMapping("/update_emps/{id}")
	public ResponseEntity<Emp> updateEmp(@PathVariable(value = "id") Long EmpId,
			@Valid @RequestBody Emp EmpDetails) throws ResourceNotFoundException {
		Emp Emp = EmpRepository.findById(EmpId)
				.orElseThrow(() -> new ResourceNotFoundException("Emp not found for this id :: " + EmpId));

		Emp.setnom(EmpDetails.getnom());
		Emp.setprenom(EmpDetails.getprenom());
		final Emp updatedEmp = EmpRepository.save(Emp);
		return ResponseEntity.ok(updatedEmp);
	}

	@DeleteMapping("/delete_emps/{id}")
	public Map<String, Boolean> deleteEmp(@PathVariable(value = "id") Long EmpId)
			throws ResourceNotFoundException {
		Emp Emp = EmpRepository.findById(EmpId)
				.orElseThrow(() -> new ResourceNotFoundException("Emp not found for this id :: " + EmpId));

		EmpRepository.delete(Emp);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return response;
	}
}