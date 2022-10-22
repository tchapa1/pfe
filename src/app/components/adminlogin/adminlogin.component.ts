

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


import { AuthadminService } from 'src/app/auth/authadmin.service';



@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {


  isLoginMode = true;
  isLoading = false;
  error: any = null;
  constructor(private authService: AuthadminService) { }

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
