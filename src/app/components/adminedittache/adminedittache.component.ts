


import { Tache } from './../../model/tache';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiadmintacheService } from './../../service/apiadmintache.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-adminedittache',
  templateUrl: './adminedittache.component.html',
  styleUrls: ['./adminedittache.component.css']
})
export class AdminedittacheComponent implements OnInit {

  submitted = false;
  editForm: FormGroup;
  tacheData: Tache[];
  tacheProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin'];
  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private apiService: ApiadmintacheService,
    private router: Router
  ) {}
  ngOnInit() {
    this.updatetache();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.gettache(id);
    this.editForm = this.fb.group({
      nom: ['', [Validators.required]],
      description: ['', [Validators.required]],
      datecreation: ['', [Validators.required]],
      idprojet: ['', [Validators.required]],
      etat: ['', [Validators.required]],
    });
  }
  // Choose options with select-dropdown

  // Getter to access form control
  get myForm() {
    return this.editForm.controls;
  }
  gettache(id) {
    this.apiService.gettache(id).subscribe((data) => {
      this.editForm.setValue({
        nom: data['nom'],
        description: data['description'],
        datecreation: data['datecreation'],
        idprojet: data['idprojet'],
        etat: data['etat'],
      });
    });
  }
  updatetache() {
    this.editForm = this.fb.group({
      nom: ['', [Validators.required]],
      description: ['', [Validators.required]],
      datecreation: ['', [Validators.required]],
      idprojet: ['', [Validators.required]],
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
        this.apiService.updatetache(id, this.editForm.value).subscribe({
          complete: () => {
            this.router.navigateByUrl('/taches-list');
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