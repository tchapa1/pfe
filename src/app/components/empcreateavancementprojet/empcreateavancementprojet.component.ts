


import { Router } from '@angular/router';
import { ApiempavancementprojetService } from './../../service/apiempavancementprojet.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-empcreateavancementprojet',
  templateUrl: './empcreateavancementprojet.component.html',
  styleUrls: ['./empcreateavancementprojet.component.css']
})
export class EmpcreateavancementprojetComponent implements OnInit {

  
  submitted = false;
  avancementprojetForm: FormGroup;
  avancementprojetProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'emp'];
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApiempavancementprojetService
  ) {
    this.mainForm();
  }
  ngOnInit() {}
  mainForm() {
    this.avancementprojetForm = this.fb.group({
      titre: ['', [Validators.required]],
      description: ['', [Validators.required]],
      idprojet: ['', [Validators.required]],
      datecreation: ['', [Validators.required]],

    });
  }

  // Getter to access form control
  get myForm() {
    return this.avancementprojetForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (!this.avancementprojetForm.valid) {
      return false;
    } else {
      return this.apiService.createavancementprojet(this.avancementprojetForm.value).subscribe({
        complete: () => {
          console.log('avancementprojet successfully created!'),
            this.ngZone.run(() => this.router.navigateByUrl('/avancementprojets-list'));
        },
        error: (e) => {
          console.log(e);
        },
      });
    }
  }
}