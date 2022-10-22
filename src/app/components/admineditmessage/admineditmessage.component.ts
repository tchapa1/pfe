


import { Message } from './../../model/message';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiadminmessageService } from './../../service/apiadminmessage.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-admineditmessage',
  templateUrl: './admineditmessage.component.html',
  styleUrls: ['./admineditmessage.component.css']
})
export class AdmineditmessageComponent implements OnInit {

  submitted = false;
  editForm: FormGroup;
  messageData: Message[];
  messageProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin'];
  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private apiService: ApiadminmessageService,
    private router: Router
  ) {}
  ngOnInit() {
    this.updatemessage();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getmessage(id);
    this.editForm = this.fb.group({
      titre: ['', [Validators.required]],
      description: ['', [Validators.required]],
      idenvoie: ['', [Validators.required]],
      idreception: ['', [Validators.required]],
      datecreation: ['', [Validators.required]],
      etat: ['', [Validators.required]],
    });
  }
  // Choose options with select-dropdown

  // Getter to access form control
  get myForm() {
    return this.editForm.controls;
  }
  getmessage(id) {
    this.apiService.getmessage(id).subscribe((data) => {
      this.editForm.setValue({
        titre: data['titre'],
        description: data['description'],
        idenvoie: data['idenvoie'],
        idreception: data['idreception'],
        datecreation: data['datecreation'],
        etat: data['etat'],
      });
    });
  }
  updatemessage() {
    this.editForm = this.fb.group({
      titre: ['', [Validators.required]],
      description: ['', [Validators.required]],
      idenvoie: ['', [Validators.required]],
      idreception: ['', [Validators.required]],
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
        this.apiService.updatemessage(id, this.editForm.value).subscribe({
          complete: () => {
            this.router.navigateByUrl('/messages-list');
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