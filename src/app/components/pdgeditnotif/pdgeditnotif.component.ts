


import { Notif } from './../../model/notif';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApipdgnotifService } from './../../service/apipdgnotif.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-pdgeditnotif',
  templateUrl: './pdgeditnotif.component.html',
  styleUrls: ['./pdgeditnotif.component.css']
})
export class PdgeditnotifComponent implements OnInit {

  submitted = false;
  editForm: FormGroup;
  notifData: Notif[];
  notifProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'pdg'];
  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private apiService: ApipdgnotifService,
    private router: Router
  ) {}
  ngOnInit() {
    this.updatenotif();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getnotif(id);
    this.editForm = this.fb.group({
      titre: ['', [Validators.required]],
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
  getnotif(id) {
    this.apiService.getnotif(id).subscribe((data) => {
      this.editForm.setValue({
        titre: data['titre'],
        description: data['description'],
        datecreation: data['datecreation'],
        etat: data['etat'],
      });
    });
  }
  updatenotif() {
    this.editForm = this.fb.group({
      titre: ['', [Validators.required]],
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
        this.apiService.updatenotif(id, this.editForm.value).subscribe({
          complete: () => {
            this.router.navigateByUrl('/notifs-list');
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