





import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


import { AuthpdgService } from 'src/app/auth/authpdg.service';



@Component({
  selector: 'app-pdglogin',
  templateUrl: './pdglogin.component.html',
  styleUrls: ['./pdglogin.component.css']
})
export class PdgloginComponent implements OnInit {


  isLoginMode = true;
  isLoading = false;
  error: any = null;
  constructor(private authService: AuthpdgService) { }

  ngOnInit(): void {
    this.error = null
    this.authService.err.subscribe(err => {
      this.error = err
      this.isLoading = false
    })
  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    this.isLoading = true;
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;

    if (this.isLoginMode) {
      this.authService.signIn(email, password)

      form.reset()
    }

  }

}
