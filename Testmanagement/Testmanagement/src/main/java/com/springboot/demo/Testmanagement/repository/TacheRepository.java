
package com.springboot.demo.Testmanagement.repository;



import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.springboot.demo.Testmanagement.model.Tache;

@Repository
public interface TacheRepository extends MongoRepository<Tache, Long>{

	Optional<Tache> findById(String tacheId);

}