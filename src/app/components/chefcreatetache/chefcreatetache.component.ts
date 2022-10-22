

import { Router } from '@angular/router';
import { ApicheftacheService } from './../../service/apicheftache.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-chefcreatetache',
  templateUrl: './chefcreatetache.component.html',
  styleUrls: ['./chefcreatetache.component.css']
})
export class ChefcreatetacheComponent implements OnInit {

  
  submitted = false;
  tacheForm: FormGroup;
  tacheProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'chef'];
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApicheftacheService
  ) {
    this.mainForm();
  }
  ngOnInit() {}
  mainForm() {
    this.tacheForm = this.fb.group({
      nom: ['', [Validators.required]],
      description: ['', [Validators.required]],
      datecreation: ['', [Validators.required]],
      idprojet: ['', [Validators.required]],
      etat: ['', [Validators.required]],

    });
  }

  // Getter to access form control
  get myForm() {
    return this.tacheForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (!this.tacheForm.valid) {
      return false;
    } else {
      return this.apiService.createtache(this.tacheForm.value).subscribe({
        complete: () => {
          console.log('tache successfully created!'),
            this.ngZone.run(() => this.router.navigateByUrl('/taches-list'));
        },
        error: (e) => {
          console.log(e);
        },
      });
    }
  }
}