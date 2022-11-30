

package com.springboot.demo.Testmanagement.model;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;


@Document (collection = "User")
public class User {

	@Transient
    public static final String SEQUENCE_NAME = "users_sequence";
	
	@Id
	private String id;
	
	@NotBlank
    @Size(max=100)
    @Indexed(unique=true)
	private String email;
	private String password;
	private String role;

	

	
	
	
	public User() {
		
	}
	
	public User(String email, String password) {
		this.email = email;
		this.password = password;
	}

	
	
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	

	public void setemail(String email) {
		this.email = email;
	}
	
	public String getpassword() {
		return password;
	}
	public void setpassword(String password) {
		this.password = password;
	}
	


	@Override
	public String toString() {
		return "User [id=" + id + ", email=" + email + ", password=" + password + "]";
	}	
}