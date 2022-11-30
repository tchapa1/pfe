


package com.springboot.demo.Testmanagement.model;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;


@Document (collection = "projets")
public class Projet {

	@Transient
    public static final String SEQUENCE_NAME = "users_sequence";
	
	@Id
	private String id;
	
	@NotBlank
    @Size(max=100)
    @Indexed(unique=true)
	private String nom;
	private String description;
	private String datecreation;
	private String etat;
	

	
	public Projet() {
		
	}
	
	public Projet(String nom, String description) {
		this.nom = nom;
		this.description = description;
	}
	public String getdatecreation() {
		return datecreation;
	}
	public void setdatecreation(String datecreation) {
		this.datecreation = datecreation;
	}





	public String getetat() {
		return etat;
	}
	public void setetat(String etat) {
		this.etat = etat;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	
	public String getnom() {
		return nom;
	}
	public void setnom(String nom) {
		this.nom = nom;
	}
	
	public String getdescription() {
		return description;
	}
	public void setdescription(String description) {
		this.description = description;
	}
	


	@Override
	public String toString() {
		return "Projet [id=" + id + ", nom=" + nom + ", description=" + description + "]";
	}

	public void setId(long generateSequence) {
		// TODO Auto-generated method stub
		
	}	
}