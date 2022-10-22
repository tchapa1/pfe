

  

import { Pdg } from './../../model/pdg';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiadminpdgService } from './../../service/apiadminpdg.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-admineditpdg',
  templateUrl: './admineditpdg.component.html',
  styleUrls: ['./admineditpdg.component.css']
})
export class AdmineditpdgComponent implements OnInit {

  submitted = false;
  editForm: FormGroup;
  pdgData: Pdg[];
  pdgProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin'];
  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private apiService: ApiadminpdgService,
    private router: Router
  ) {}
  ngOnInit() {
    this.updatepdg();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getpdg(id);
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
  getpdg(id) {
    this.apiService.getpdg(id).subscribe((data) => {
      this.editForm.setValue({
        nom: data['nom'],
        prenom: data['prenom'],
        email: data['email'],
        password: data['password'],
        image: data['image'],
      });
    });
  }
  updatepdg() {
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
        this.apiService.updatepdg(id, this.editForm.value).subscribe({
          complete: () => {
            this.router.navigateByUrl('/pdgs-list');
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