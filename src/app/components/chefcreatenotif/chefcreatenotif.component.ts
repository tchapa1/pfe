

import { Router } from '@angular/router';
import { ApichefnotifService } from './../../service/apichefnotif.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-chefcreatenotif',
  templateUrl: './chefcreatenotif.component.html',
  styleUrls: ['./chefcreatenotif.component.css']
})
export class ChefcreatenotifComponent implements OnInit {

  
  submitted = false;
  notifForm: FormGroup;
  notifProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'chef'];
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApichefnotifService
  ) {
    this.mainForm();
  }
  ngOnInit() {}
  mainForm() {
    this.notifForm = this.fb.group({
      titre: ['', [Validators.required]],
      description: ['', [Validators.required]],
      datecreation: ['', [Validators.required]],
      etat: ['', [Validators.required]],

    });
  }

  // Getter to access form control
  get myForm() {
    return this.notifForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (!this.notifForm.valid) {
      return false;
    } else {
      return this.apiService.createnotif(this.notifForm.value).subscribe({
        complete: () => {
          console.log('notif successfully created!'),
            this.ngZone.run(() => this.router.navigateByUrl('/notifs-list'));
        },
        error: (e) => {
          console.log(e);
        },
      });
    }
  }
}