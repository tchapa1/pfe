

import { Groupe } from './../../model/groupe';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApichefgroupeService } from './../../service/apichefgroupe.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-chefeditgroupe',
  templateUrl: './chefeditgroupe.component.html',
  styleUrls: ['./chefeditgroupe.component.css']
})
export class ChefeditgroupeComponent implements OnInit {

  submitted = false;
  editForm: FormGroup;
  groupeData: Groupe[];
  groupeProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'chef'];
  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private apiService: ApichefgroupeService,
    private router: Router
  ) {}
  ngOnInit() {
    this.updategroupe();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getgroupe(id);
    this.editForm = this.fb.group({
      nom: ['', [Validators.required]],
      description: ['', [Validators.required]],
      datecreation: ['', [Validators.required]],
      etat: ['', [Validators.required]],
    });
  }
  // Choose options with select-dropdown

  // Getter to access form control
  get myForm() {
    return this.editForm.controls;
  }
  getgroupe(id) {
    this.apiService.getgroupe(id).subscribe((data) => {
      this.editForm.setValue({
        nom: data['nom'],
        description: data['description'],
        datecreation: data['datecreation'],
        etat: data['etat'],
      });
    });
  }
  updategroupe() {
    this.editForm = this.fb.group({
      nom: ['', [Validators.required]],
      description: ['', [Validators.required]],
      datecreation: ['', [Validators.required]],
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
        this.apiService.updategroupe(id, this.editForm.value).subscribe({
          complete: () => {
            this.router.navigateByUrl('/groupes-list');
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