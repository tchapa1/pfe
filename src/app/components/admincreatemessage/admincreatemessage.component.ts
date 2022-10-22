

import { Router } from '@angular/router';
import { ApiadminmessageService } from './../../service/apiadminmessage.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-admincreatemessage',
  templateUrl: './admincreatemessage.component.html',
  styleUrls: ['./admincreatemessage.component.css']
})
export class AdmincreatemessageComponent implements OnInit {

  
  submitted = false;
  messageForm: FormGroup;
  messageProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin'];
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApiadminmessageService
  ) {
    this.mainForm();
  }
  ngOnInit() {}
  mainForm() {
    this.messageForm = this.fb.group({
      titre: ['', [Validators.required]],
      description: ['', [Validators.required]],
      idenvoie: ['', [Validators.required]],
      idreception: ['', [Validators.required]],
      datecreation: ['', [Validators.required]],
      etat: ['', [Validators.required]],

    });
  }

  // Getter to access form control
  get myForm() {
    return this.messageForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (!this.messageForm.valid) {
      return false;
    } else {
      return this.apiService.createmessage(this.messageForm.value).subscribe({
        complete: () => {
          console.log('message successfully created!'),
            this.ngZone.run(() => this.router.navigateByUrl('/messages-list'));
        },
        error: (e) => {
          console.log(e);
        },
      });
    }
  }
}