
package com.springboot.demo.Testmanagement.repository;



import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.springboot.demo.Testmanagement.model.Conge;

@Repository
public interface CongeRepository extends MongoRepository<Conge, String>{

	Optional<Conge> findById(String CongeId);

	Optional<Conge> findById(Long CongeId);

}