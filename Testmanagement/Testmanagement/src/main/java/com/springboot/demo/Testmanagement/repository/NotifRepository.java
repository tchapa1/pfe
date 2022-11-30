



package com.springboot.demo.Testmanagement.repository;



import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.springboot.demo.Testmanagement.model.Notif;

@Repository
public interface NotifRepository extends MongoRepository<Notif, Long>{

}