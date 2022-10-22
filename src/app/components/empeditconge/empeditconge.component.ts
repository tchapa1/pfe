

import { Conge } from './../../model/conge';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiempcongeService } from './../../service/apiempconge.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-empeditconge',
  templateUrl: './empeditconge.component.html',
  styleUrls: ['./empeditconge.component.css']
})
export class EmpeditcongeComponent implements OnInit {

  submitted = false;
  editForm: FormGroup;
  congeData: Conge[];
  congeProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'emp'];
  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private apiService: ApiempcongeService,
    private router: Router
  ) {}
  ngOnInit() {
    this.updateconge();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getconge(id);
    this.editForm = this.fb.group({
      idemploye: ['', [Validators.required]],
      description: ['', [Validators.required]],
      datedebut: ['', [Validators.required]],
      datefin: ['', [Validators.required]],
      etat: ['', [Validators.required]],
    });
  }
  // Choose options with select-dropdown

  // Getter to access form control
  get myForm() {
    return this.editForm.controls;
  }
  getconge(id) {
    this.apiService.getconge(id).subscribe((data) => {
      this.editForm.setValue({
        idemploye: data['idemploye'],
        description: data['description'],
        datedebut: data['datedebut'],
        datefin: data['datefin'],
        etat: data['etat'],
      });
    });
  }
  updateconge() {
    this.editForm = this.fb.group({
      idemploye: ['', [Validators.required]],
      description: ['', [Validators.required]],
      datedebut: ['', [Validators.required]],
      datefin: ['', [Validators.required]],
      etat: ['', [Validators.required]],
    });
  }
  onSubmit() {
    this.submitted = true;
    if (!this.editForm.valid) {
      return false;
    } else {
      if (window.confirm('Are you sure?')) {
        let id = this.actRoute.snapshot.paramMap.get('id');
        this.apiService.updateconge(id, this.editForm.value).subscribe({
          complete: () => {
            this.router.navigateByUrl('/conges-list');
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