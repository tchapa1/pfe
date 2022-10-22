

import { Router } from '@angular/router';
import { ApichefadminService } from './../../service/apichefadmin.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-chefcreateadmin',
  templateUrl: './chefcreateadmin.component.html',
  styleUrls: ['./chefcreateadmin.component.css']
})
export class ChefcreateadminComponent implements OnInit {
  submitted = false;
  adminForm: FormGroup;
  adminProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin'];
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApichefadminService
  ) {
    this.mainForm();
  }
  ngOnInit() {}
  mainForm() {
    this.adminForm = this.fb.group({
      nom: ['', [Validators.required]],
      prenom: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      image: ['', [Validators.required]],

    });
  }

  // Getter to access form control
  get myForm() {
    return this.adminForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (!this.adminForm.valid) {
      return false;
    } else {
      return this.apiService.createadmin(this.adminForm.value).subscribe({
        complete: () => {
          console.log('admin successfully created!'),
            this.ngZone.run(() => this.router.navigateByUrl('/admins-list'));
        },
        error: (e) => {
          console.log(e);
        },
      });
    }
  }
}