

import { Router } from '@angular/router';
import { ApiadminpdgService } from './../../service/apiadminpdg.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-admincreatepdg',
  templateUrl: './admincreatepdg.component.html',
  styleUrls: ['./admincreatepdg.component.css']
})
export class AdmincreatepdgComponent implements OnInit {

  
  submitted = false;
  pdgForm: FormGroup;
  pdgProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin'];
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApiadminpdgService
  ) {
    this.mainForm();
  }
  ngOnInit() {}
  mainForm() {
    this.pdgForm = this.fb.group({
      idemploye: ['', [Validators.required]],
      description: ['', [Validators.required]],
      datedebut: ['', [Validators.required]],
      datefin: ['', [Validators.required]],
      etat: ['', [Validators.required]],

    });
  }

  // Getter to access form control
  get myForm() {
    return this.pdgForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (!this.pdgForm.valid) {
      return false;
    } else {
      return this.apiService.createpdg(this.pdgForm.value).subscribe({
        complete: () => {
          console.log('pdg successfully created!'),
            this.ngZone.run(() => this.router.navigateByUrl('/pdgs-list'));
        },
        error: (e) => {
          console.log(e);
        },
      });
    }
  }
}