

import { Router } from '@angular/router';
import { ApipdgpdgService } from './../../service/apipdgpdg.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-pdgcreatepdg',
  templateUrl: './pdgcreatepdg.component.html',
  styleUrls: ['./pdgcreatepdg.component.css']
})
export class PdgcreatepdgComponent implements OnInit {

  
  submitted = false;
  pdgForm: FormGroup;
  pdgProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'pdg'];
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApipdgpdgService
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