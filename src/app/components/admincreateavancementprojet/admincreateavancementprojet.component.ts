

import { Router } from '@angular/router';
import { ApiadminavancementprojetService } from './../../service/apiadminavancementprojet.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-admincreateavancementprojet',
  templateUrl: './admincreateavancementprojet.component.html',
  styleUrls: ['./admincreateavancementprojet.component.css']
})
export class AdmincreateavancementprojetComponent implements OnInit {

  
  submitted = false;
  avancementprojetForm: FormGroup;
  avancementprojetProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin'];
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApiadminavancementprojetService
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