

import { Chef } from './../../model/chef';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApipdgchefService } from './../../service/apipdgchef.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-pdgeditchef',
  templateUrl: './pdgeditchef.component.html',
  styleUrls: ['./pdgeditchef.component.css']
})
export class PdgeditchefComponent implements OnInit {

  submitted = false;
  editForm: FormGroup;
  chefData: Chef[];
  chefProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'pdg'];
  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private apiService: ApipdgchefService,
    private router: Router
  ) {}
  ngOnInit() {
    this.updatechef();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getchef(id);
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
  getchef(id) {
    this.apiService.getchef(id).subscribe((data) => {
      this.editForm.setValue({
        nom: data['nom'],
        prenom: data['prenom'],
        email: data['email'],
        password: data['password'],
        image: data['image'],
      });
    });
  }
  updatechef() {
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
        this.apiService.updatechef(id, this.editForm.value).subscribe({
          complete: () => {
            this.router.navigateByUrl('/chefs-list');
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