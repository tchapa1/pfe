

import { Component, OnInit } from '@angular/core';
import { ApipdgnotifService } from './../../service/apipdgnotif.service';
@Component({
  selector: 'app-pdglistnotif',
  templateUrl: './pdglistnotif.component.html',
  styleUrls: ['./pdglistnotif.component.css']
})
export class PdglistnotifComponent implements OnInit {
  
  notif:any = [];
  constructor(private apiService: ApipdgnotifService) { 
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