


import { Router } from '@angular/router';
import { ApichefchefService } from './../../service/apichefchef.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-chefcreatechef',
  templateUrl: './chefcreatechef.component.html',
  styleUrls: ['./chefcreatechef.component.css']
})
export class ChefcreatechefComponent implements OnInit {

  
  submitted = false;
  chefForm: FormGroup;
  chefProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'chef'];
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApichefchefService
  ) {
    this.mainForm();
  }
  ngOnInit() {}
  mainForm() {
    this.chefForm = this.fb.group({
      nom: ['', [Validators.required]],
      prenom: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      image: ['', [Validators.required]],

    });
  }

  // Getter to access form control
  get myForm() {
    return this.chefForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (!this.chefForm.valid) {
      return false;
    } else {
      return this.apiService.createchef(this.chefForm.value).subscribe({
        complete: () => {
          console.log('chef successfully created!'),
            this.ngZone.run(() => this.router.navigateByUrl('/chefs-list'));
        },
        error: (e) => {
          console.log(e);
        },
      });
    }
  }
}