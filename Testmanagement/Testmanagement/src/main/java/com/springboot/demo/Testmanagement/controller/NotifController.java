



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
import com.springboot.demo.Testmanagement.model.Notif;
import com.springboot.demo.Testmanagement.repository.NotifRepository;
import com.springboot.demo.Testmanagement.service.SequenceGeneratorService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1")
public class NotifController {
	@Autowired
	private NotifRepository NotifRepository;
	
	@Autowired
	private SequenceGeneratorService sequenceGeneratorService;

	@GetMapping("/get_all_notifs")
	public List<Notif> getAllNotifs() {
		return NotifRepository.findAll();
	}

	@GetMapping("/get_notifs_by_id/{id}")
	public ResponseEntity<Notif> getNotifById(@PathVariable(value = "id") Long NotifId)
			throws ResourceNotFoundException {
		Notif Notif = NotifRepository.findById(NotifId)
				.orElseThrow(() -> new ResourceNotFoundException("Notif not found for this id :: " + NotifId));
		return ResponseEntity.ok().body(Notif);
	}

	@PostMapping("/create_notifs")
	public Notif createNotif(@Valid @RequestBody Notif Notif) {
		Notif.setId(sequenceGeneratorService.generateSequence(Notif.SEQUENCE_NAME));
		return NotifRepository.save(Notif);
	}

	@PutMapping("/update_notifs/{id}")
	public ResponseEntity<Notif> updateNotif(@PathVariable(value = "id") Long NotifId,
			@Valid @RequestBody Notif NotifDetails) throws ResourceNotFoundException {
		Notif Notif = NotifRepository.findById(NotifId)
				.orElseThrow(() -> new ResourceNotFoundException("Notif not found for this id :: " + NotifId));

		Notif.settitre(NotifDetails.gettitre());
		Notif.setdescription(NotifDetails.getdescription());
		final Notif updatedNotif = NotifRepository.save(Notif);
		return ResponseEntity.ok(updatedNotif);
	}

	@DeleteMapping("/delete_notifs/{id}")
	public Map<String, Boolean> deleteNotif(@PathVariable(value = "id") Long NotifId)
			throws ResourceNotFoundException {
		Notif Notif = NotifRepository.findById(NotifId)
				.orElseThrow(() -> new ResourceNotFoundException("Notif not found for this id :: " + NotifId));

		NotifRepository.delete(Notif);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return response;
	}
}