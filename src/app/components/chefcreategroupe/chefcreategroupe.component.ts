


import { Router } from '@angular/router';
import { ApichefgroupeService } from './../../service/apichefgroupe.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-chefcreategroupe',
  templateUrl: './chefcreategroupe.component.html',
  styleUrls: ['./chefcreategroupe.component.css']
})
export class ChefcreategroupeComponent implements OnInit {

  
  submitted = false;
  groupeForm: FormGroup;
  groupeProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'chef'];
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApichefgroupeService
  ) {
    this.mainForm();
  }
  ngOnInit() {}
  mainForm() {
    this.groupeForm = this.fb.group({
      nom: ['', [Validators.required]],
      description: ['', [Validators.required]],
      datecreation: ['', [Validators.required]],
      etat: ['', [Validators.required]],

    });
  }

  // Getter to access form control
  get myForm() {
    return this.groupeForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (!this.groupeForm.valid) {
      return false;
    } else {
      return this.apiService.creategroupe(this.groupeForm.value).subscribe({
        complete: () => {
          console.log('groupe successfully created!'),
            this.ngZone.run(() => this.router.navigateByUrl('/groupes-list'));
        },
        error: (e) => {
          console.log(e);
        },
      });
    }
  }
}