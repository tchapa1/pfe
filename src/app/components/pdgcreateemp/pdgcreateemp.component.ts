

import { Router } from '@angular/router';
import { ApipdgempService } from './../../service/apipdgemp.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-pdgcreateemp',
  templateUrl: './pdgcreateemp.component.html',
  styleUrls: ['./pdgcreateemp.component.css']
})
export class PdgcreateempComponent implements OnInit {

  
  submitted = false;
  empForm: FormGroup;
  empProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'pdg'];
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApipdgempService
  ) {
    this.mainForm();
  }
  ngOnInit() {}
  mainForm() {
    this.empForm = this.fb.group({
      nom: ['', [Validators.required]],
      prenom: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      diplome: ['', [Validators.required]],
      specialite: ['', [Validators.required]],
      image: ['', [Validators.required]],

    });
  }

  // Getter to access form control
  get myForm() {
    return this.empForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (!this.empForm.valid) {
      return false;
    } else {
      return this.apiService.createemp(this.empForm.value).subscribe({
        complete: () => {
          console.log('emp successfully created!'),
            this.ngZone.run(() => this.router.navigateByUrl('/emps-list'));
        },
        error: (e) => {
          console.log(e);
        },
      });
    }
  }
}