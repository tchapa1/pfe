


import { Router } from '@angular/router';
import { ApipdgcongeService } from './../../service/apipdgconge.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-pdgcreateconge',
  templateUrl: './pdgcreateconge.component.html',
  styleUrls: ['./pdgcreateconge.component.css']
})
export class PdgcreatecongeComponent implements OnInit {

  
  submitted = false;
  congeForm: FormGroup;
  congeProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'pdg'];
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApipdgcongeService
  ) {
    this.mainForm();
  }
  ngOnInit() {}
  mainForm() {
    this.congeForm = this.fb.group({
      idemploye: ['', [Validators.required]],
      description: ['', [Validators.required]],
      datedebut: ['', [Validators.required]],
      datefin: ['', [Validators.required]],
      etat: ['', [Validators.required]],

    });
  }

  // Getter to access form control
  get myForm() {
    return this.congeForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (!this.congeForm.valid) {
      return false;
    } else {
      return this.apiService.createconge(this.congeForm.value).subscribe({
        complete: () => {
          console.log('conge successfully created!'),
            this.ngZone.run(() => this.router.navigateByUrl('/conges-list'));
        },
        error: (e) => {
          console.log(e);
        },
      });
    }
  }
}