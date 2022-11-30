

package com.springboot.demo.Testmanagement.model;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;


@Document (collection = "messages")
public class Message {

	@Transient
    public static final String SEQUENCE_NAME = "users_sequence";
	
	@Id
	private String id;
	
	@NotBlank
    @Size(max=100)
    @Indexed(unique=true)
	private String titre;
	private String description;
	private String idenvoie;
	private String idreception;
	private String datecreation;
	private String etat;
	

	
	public Message() {
		
	}
	
	public Message(String titre, String description) {
		this.titre = titre;
		this.description = description;
	}
	public String getidreception() {
		return idreception;
	}
	public void setidreception(String idreception) {
		this.idreception = idreception;
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
	public String getidenvoie() {
		return idenvoie;
	}
	public void setidenvoie(String idenvoie) {
		this.idenvoie = idenvoie;
	}
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	
	public String gettitre() {
		return titre;
	}
	public void settitre(String titre) {
		this.titre = titre;
	}
	
	public String getdescription() {
		return description;
	}
	public void setdescription(String description) {
		this.description = description;
	}
	
	public void setId(long generateSequence) {
		// TODO Auto-generated method stub
		
	}	

	@Override
	public String toString() {
		return "Message [id=" + id + ", titre=" + titre + ", description=" + description + "]";
	}	
}