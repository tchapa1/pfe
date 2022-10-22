

import { Router } from '@angular/router';
import { ApichefmessageService } from './../../service/apichefmessage.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-chefcreatemessage',
  templateUrl: './chefcreatemessage.component.html',
  styleUrls: ['./chefcreatemessage.component.css']
})
export class ChefcreatemessageComponent implements OnInit {

  
  submitted = false;
  messageForm: FormGroup;
  messageProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'chef'];
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApichefmessageService
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