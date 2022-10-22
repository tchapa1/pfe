


import { Router } from '@angular/router';
import { ApipdgtacheService } from './../../service/apipdgtache.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-pdgcreatetache',
  templateUrl: './pdgcreatetache.component.html',
  styleUrls: ['./pdgcreatetache.component.css']
})
export class PdgcreatetacheComponent implements OnInit {

  
  submitted = false;
  tacheForm: FormGroup;
  tacheProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'pdg'];
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApipdgtacheService
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