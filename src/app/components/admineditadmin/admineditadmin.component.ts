


import { Admin } from './../../model/admin';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiadminadminService } from './../../service/apiadminadmin.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-admineditadmin',
  templateUrl: './admineditadmin.component.html',
  styleUrls: ['./admineditadmin.component.css']
})
export class AdmineditadminComponent implements OnInit {

  submitted = false;
  editForm: FormGroup;
  adminData: Admin[];
  adminProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin'];
  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private apiService: ApiadminadminService,
    private router: Router
  ) {}
  ngOnInit() {
    this.updateadmin();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getadmin(id);
    this.editForm = this.fb.group({
      nom: ['', [Validators.required]],
      prenom: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      image: ['', [Validators.required]],

    });
  }
  // Choose options with select-dropdown

  // Getter to access form control
  get myForm() {
    return this.editForm.controls;
  }
  getadmin(id) {
    this.apiService.getadmin(id).subscribe((data) => {
      this.editForm.setValue({
        nom: data['nom'],
        prenom: data['prenom'],
        email: data['email'],
        password: data['password'],
        image: data['image'],
      });
    });
  }
  updateadmin() {
    this.editForm = this.fb.group({
      nom: ['', [Validators.required]],
      prenom: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
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
        this.apiService.updateadmin(id, this.editForm.value).subscribe({
          complete: () => {
            this.router.navigateByUrl('/admins-list');
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