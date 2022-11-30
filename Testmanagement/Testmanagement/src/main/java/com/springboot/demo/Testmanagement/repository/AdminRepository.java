


package com.springboot.demo.Testmanagement.repository;



import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.springboot.demo.Testmanagement.model.Admin;

@Repository
public interface AdminRepository extends MongoRepository<Admin, Long>{

	Optional<Admin> findById(String adminId);

}