

import { Absence } from './../../model/absence';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApipdgabsenceService } from './../../service/apipdgabsence.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-pdgeditabsence',
  templateUrl: './pdgeditabsence.component.html',
  styleUrls: ['./pdgeditabsence.component.css']
})
export class PdgeditabsenceComponent implements OnInit {

  submitted = false;
  editForm: FormGroup;
  absenceData: Absence[];
  absenceProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'pdg'];
  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private apiService: ApipdgabsenceService,
    private router: Router
  ) {}
  ngOnInit() {
    this.updateabsence();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getabsence(id);
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
  getabsence(id) {
    this.apiService.getabsence(id).subscribe((data) => {
      this.editForm.setValue({
        idemploye: data['idemploye'],
        description: data['description'],
        datedebut: data['datedebut'],
        datefin: data['datefin'],
        etat: data['etat'],
      });
    });
  }
  updateabsence() {
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
        this.apiService.updateabsence(id, this.editForm.value).subscribe({
          complete: () => {
            this.router.navigateByUrl('/absences-list');
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