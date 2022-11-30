



package com.springboot.demo.Testmanagement.repository;



import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.springboot.demo.Testmanagement.model.Pdg;

@Repository
public interface PdgRepository extends MongoRepository<Pdg, Long>{

	Optional<Pdg> findById(String pdgId);

}