




package com.springboot.demo.Testmanagement.repository;



import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.springboot.demo.Testmanagement.model.Groupe;

@Repository
public interface GroupeRepository extends MongoRepository<Groupe, Long>{

	Optional<Groupe> findById(String groupeId);



}