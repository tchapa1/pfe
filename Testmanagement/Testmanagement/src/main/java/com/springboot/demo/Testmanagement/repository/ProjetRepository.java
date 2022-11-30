




package com.springboot.demo.Testmanagement.repository;



import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.springboot.demo.Testmanagement.model.Projet;

@Repository
public interface ProjetRepository extends MongoRepository<Projet, Long>{

	Optional<Projet> findById(String projetId);

}