

package com.springboot.demo.Testmanagement.model;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;


@Document (collection = "absences")
public class Absence {

	@Transient
    public static final String SEQUENCE_NAME = "users_sequence";
	
	@Id private String id;
	
	@NotBlank
    @Size(max=100)
    @Indexed(unique=true)
	private String idemploye;
	private String description;
	private String datedebut;
	private String datefin;
	private String etat;
	

	
		
	public Absence() {
		
	}
	
	public Absence(String idemploye, String description, String datedebut, String datefin , String etat) {
		this.idemploye = idemploye;
		this.description = description;
		this.datedebut = datedebut;
		this.datefin = datefin;
		this.etat = etat;
	}
	public String getetat() {
		return etat;
	}
	public void setetat(String etat) {
		this.etat = etat;
	}
	
	public String getdatedebut() {
		return datedebut;
	}
	public void setdatedebut(String datedebut) {
		this.datedebut = datedebut;
	}

	
	public String getdatefin() {
		return datefin;
	}
	public void setdatefin(String datefin) {
		this.datefin = datefin;
	}
	
	
	
	
	
	
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	
	public String getidemploye() {
		return idemploye;
	}
	public void setidemploye(String idemploye) {
		this.idemploye = idemploye;
	}
	
	public String getdescription() {
		return description;
	}
	public void setdescription(String description) {
		this.description = description;
	}
	


	@Override
	public String toString() {
		return "Absence [id=" + id + ", idemploye=" + idemploye + ", description=" + description + "]";
	}

	public void setId(long generateSequence) {
		// TODO Auto-generated method stub
		
	}	
}