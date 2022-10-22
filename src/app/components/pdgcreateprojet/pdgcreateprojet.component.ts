

import { Router } from '@angular/router';
import { ApipdgprojetService } from './../../service/apipdgprojet.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-pdgcreateprojet',
  templateUrl: './pdgcreateprojet.component.html',
  styleUrls: ['./pdgcreateprojet.component.css']
})
export class PdgcreateprojetComponent implements OnInit {

  
  submitted = false;
  projetForm: FormGroup;
  projetProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'pdg'];
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApipdgprojetService
  ) {
    this.mainForm();
  }
  ngOnInit() {}
  mainForm() {
    this.projetForm = this.fb.group({
      nom: ['', [Validators.required]],
      description: ['', [Validators.required]],
      datecreation: ['', [Validators.required]],
      etat: ['', [Validators.required]],

    });
  }

  // Getter to access form control
  get myForm() {
    return this.projetForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (!this.projetForm.valid) {
      return false;
    } else {
      return this.apiService.createprojet(this.projetForm.value).subscribe({
        complete: () => {
          console.log('projet successfully created!'),
            this.ngZone.run(() => this.router.navigateByUrl('/projets-list'));
        },
        error: (e) => {
          console.log(e);
        },
      });
    }
  }
}