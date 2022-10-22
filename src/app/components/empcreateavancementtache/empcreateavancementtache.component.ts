


import { Router } from '@angular/router';
import { ApiempavancementtacheService } from './../../service/apiempavancementtache.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-empcreateavancementtache',
  templateUrl: './empcreateavancementtache.component.html',
  styleUrls: ['./empcreateavancementtache.component.css']
})
export class EmpcreateavancementtacheComponent implements OnInit {

  
  submitted = false;
  avancementtacheForm: FormGroup;
  avancementtacheProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'emp'];
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApiempavancementtacheService
  ) {
    this.mainForm();
  }
  ngOnInit() {}
  mainForm() {
    this.avancementtacheForm = this.fb.group({
      titre: ['', [Validators.required]],
      description: ['', [Validators.required]],
      idtache: ['', [Validators.required]],
      datecreation: ['', [Validators.required]],

    });
  }

  // Getter to access form control
  get myForm() {
    return this.avancementtacheForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (!this.avancementtacheForm.valid) {
      return false;
    } else {
      return this.apiService.createavancementtache(this.avancementtacheForm.value).subscribe({
        complete: () => {
          console.log('avancementtache successfully created!'),
            this.ngZone.run(() => this.router.navigateByUrl('/avancementtaches-list'));
        },
        error: (e) => {
          console.log(e);
        },
      });
    }
  }
}