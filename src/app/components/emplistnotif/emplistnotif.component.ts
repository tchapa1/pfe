


import { Component, OnInit } from '@angular/core';
import { ApiempnotifService } from './../../service/apiempnotif.service';
@Component({
  selector: 'app-emplistnotif',
  templateUrl: './emplistnotif.component.html',
  styleUrls: ['./emplistnotif.component.css']
})
export class EmplistnotifComponent implements OnInit {
  
  notif:any = [];
  constructor(private apiService: ApiempnotifService) { 
    this.readnotif();
  }
  ngOnInit() {}
  readnotif(){
    this.apiService.getnotifs().subscribe((data) => {
     this.notif = data;
    })    
  }
  removenotif(notif, index) {
    if(window.confirm('Are you sure?')) {
        this.apiService.deletenotif(notif._id).subscribe((data) => {
          this.notif.splice(index, 1);
        }
      )    
    }
  }
}