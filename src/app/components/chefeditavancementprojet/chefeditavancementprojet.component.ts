


import { Avancementprojet } from './../../model/avancementprojet';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApichefavancementprojetService } from './../../service/apichefavancementprojet.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-chefeditavancementprojet',
  templateUrl: './chefeditavancementprojet.component.html',
  styleUrls: ['./chefeditavancementprojet.component.css']
})
export class ChefeditavancementprojetComponent implements OnInit {

  submitted = false;
  editForm: FormGroup;
  avancementprojetData: Avancementprojet[];
  avancementprojetProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'chef'];
  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private apiService: ApichefavancementprojetService,
    private router: Router
  ) {}
  ngOnInit() {
    this.updateavancementprojet();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getavancementprojet(id);
    this.editForm = this.fb.group({
      titre: ['', [Validators.required]],
      description: ['', [Validators.required]],
      idprojet: ['', [Validators.required]],
      datecreation: ['', [Validators.required]],
    });
  }
  // Choose options with select-dropdown

  // Getter to access form control
  get myForm() {
    return this.editForm.controls;
  }
  getavancementprojet(id) {
    this.apiService.getavancementprojet(id).subscribe((data) => {
      this.editForm.setValue({
        titre: data['titre'],
        description: data['description'],
        idprojet: data['idprojet'],
        datecreation: data['datecreation'],
      });
    });
  }
  updateavancementprojet() {
    this.editForm = this.fb.group({
      titre: ['', [Validators.required]],
      description: ['', [Validators.required]],
      idprojet: ['', [Validators.required]],
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
        this.apiService.updateavancementprojet(id, this.editForm.value).subscribe({
          complete: () => {
            this.router.navigateByUrl('/avancementprojets-list');
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