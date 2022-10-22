


import { Emp } from './../../model/emp';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApichefempService } from './../../service/apichefemp.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-chefeditemp',
  templateUrl: './chefeditemp.component.html',
  styleUrls: ['./chefeditemp.component.css']
})
export class ChefeditempComponent implements OnInit {

  submitted = false;
  editForm: FormGroup;
  empData: Emp[];
  empProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'chef'];
  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private apiService: ApichefempService,
    private router: Router
  ) {}
  ngOnInit() {
    this.updateemp();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getemp(id);
    this.editForm = this.fb.group({
      nom: ['', [Validators.required]],
      prenom: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      diplome: ['', [Validators.required]],
      specialite: ['', [Validators.required]],
      image: ['', [Validators.required]],
    });
  }
  // Choose options with select-dropdown

  // Getter to access form control
  get myForm() {
    return this.editForm.controls;
  }
  getemp(id) {
    this.apiService.getemp(id).subscribe((data) => {
      this.editForm.setValue({
        nom: data['nom'],
        prenom: data['prenom'],
        email: data['email'],
        password: data['password'],
        diplome: data['diplome'],
        specialite: data['specialite'],
        image: data['image'],
      });
    });
  }
  updateemp() {
    this.editForm = this.fb.group({
      nom: ['', [Validators.required]],
      prenom: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      diplome: ['', [Validators.required]],
      specialite: ['', [Validators.required]],
      image: ['', [Validators.required]],
    });
  }
  onSubmit() {
    this.submitted = true;
    if (!this.editForm.valid) {
      return false;
    } else {
      if (window.confirm('Are you sure?')) {
        let id = this.actRoute.snapshot.paramMap.get('id');
        this.apiService.updateemp(id, this.editForm.value).subscribe({
          complete: () => {
            this.router.navigateByUrl('/emps-list');
            console.log('Content updated successfully!');
          },
          error: (e) => {
            console.log(e);
          },
        });
      }
    }
  }
}