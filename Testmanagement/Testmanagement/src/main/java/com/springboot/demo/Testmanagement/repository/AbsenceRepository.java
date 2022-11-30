
package com.springboot.demo.Testmanagement.repository;



import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.springboot.demo.Testmanagement.model.Absence;

@Repository
public interface AbsenceRepository extends MongoRepository<Absence, String>{

	Optional<Absence> findById(String absenceId);

	Optional<Absence> findById(Long absenceId);

}