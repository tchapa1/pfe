

import { Router } from '@angular/router';
import { ApichefavancementprojetService } from './../../service/apichefavancementprojet.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-chefcreateavancementprojet',
  templateUrl: './chefcreateavancementprojet.component.html',
  styleUrls: ['./chefcreateavancementprojet.component.css']
})
export class ChefcreateavancementprojetComponent implements OnInit {

  
  submitted = false;
  avancementprojetForm: FormGroup;
  avancementprojetProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'chef'];
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApichefavancementprojetService
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