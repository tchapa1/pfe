

import { Avancementtache } from './../../model/avancementtache';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiempavancementtacheService } from './../../service/apiempavancementtache.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-empeditavancementtache',
  templateUrl: './empeditavancementtache.component.html',
  styleUrls: ['./empeditavancementtache.component.css']
})
export class EmpeditavancementtacheComponent implements OnInit {

  submitted = false;
  editForm: FormGroup;
  avancementtacheData: Avancementtache[];
  avancementtacheProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'emp'];
  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private apiService: ApiempavancementtacheService,
    private router: Router
  ) {}
  ngOnInit() {
    this.updateavancementtache();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getavancementtache(id);
    this.editForm = this.fb.group({
      titre: ['', [Validators.required]],
      description: ['', [Validators.required]],
      idtache: ['', [Validators.required]],
      datecreation: ['', [Validators.required]],
    });
  }
  // Choose options with select-dropdown

  // Getter to access form control
  get myForm() {
    return this.editForm.controls;
  }
  getavancementtache(id) {
    this.apiService.getavancementtache(id).subscribe((data) => {
      this.editForm.setValue({
        titre: data['titre'],
        description: data['description'],
        idtache: data['idtache'],
        datecreation: data['datecreation'],

      });
    });
  }
  updateavancementtache() {
    this.editForm = this.fb.group({
      titre: ['', [Validators.required]],
      description: ['', [Validators.required]],
      idtache: ['', [Validators.required]],
      datecreation: ['', [Validators.required]],
    });
  }
  onSubmit() {
    this.submitted = true;
    if (!this.editForm.valid) {
      return false;
    } else {
      if (window.confirm('Are you sure?')) {
        let id = this.actRoute.snapshot.paramMap.get('id');
        this.apiService.updateavancementtache(id, this.editForm.value).subscribe({
          complete: () => {
            this.router.navigateByUrl('/avancementtaches-list');
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