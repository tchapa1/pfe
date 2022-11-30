



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
import com.springboot.demo.Testmanagement.model.Message;
import com.springboot.demo.Testmanagement.repository.MessageRepository;
import com.springboot.demo.Testmanagement.service.SequenceGeneratorService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1")
public class MessageController {
	@Autowired
	private MessageRepository MessageRepository;
	
	@Autowired
	private SequenceGeneratorService sequenceGeneratorService;

	@GetMapping("/get_all_messages")
	public List<Message> getAllMessages() {
		return MessageRepository.findAll();
	}

	@GetMapping("/get_messages_by_id/{id}")
	public ResponseEntity<Message> getMessageById(@PathVariable(value = "id") Long MessageId)
			throws ResourceNotFoundException {
		Message Message = MessageRepository.findById(MessageId)
				.orElseThrow(() -> new ResourceNotFoundException("Message not found for this id :: " + MessageId));
		return ResponseEntity.ok().body(Message);
	}

	@PostMapping("/create_messages")
	public Message createMessage(@Valid @RequestBody Message Message) {
		Message.setId(sequenceGeneratorService.generateSequence(Message.SEQUENCE_NAME));
		return MessageRepository.save(Message);
	}

	@PutMapping("/update_messages/{id}")
	public ResponseEntity<Message> updateMessage(@PathVariable(value = "id") Long MessageId,
			@Valid @RequestBody Message MessageDetails) throws ResourceNotFoundException {
		Message Message = MessageRepository.findById(MessageId)
				.orElseThrow(() -> new ResourceNotFoundException("Message not found for this id :: " + MessageId));

		Message.settitre(MessageDetails.gettitre());
		Message.setdescription(MessageDetails.getdescription());
		Message.setidenvoie(MessageDetails.getidenvoie());
		Message.setidreception(MessageDetails.getidreception());
		Message.setdatecreation(MessageDetails.getdatecreation());
		Message.setetat(MessageDetails.getetat());
		final Message updatedMessage = MessageRepository.save(Message);
		return ResponseEntity.ok(updatedMessage);
	}

	@DeleteMapping("/delete_messages/{id}")
	public Map<String, Boolean> deleteMessage(@PathVariable(value = "id") Long MessageId)
			throws ResourceNotFoundException {
		Message Message = MessageRepository.findById(MessageId)
				.orElseThrow(() -> new ResourceNotFoundException("Message not found for this id :: " + MessageId));

		MessageRepository.delete(Message);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return response;
	}
}