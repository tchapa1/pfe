


import { Component, OnInit } from '@angular/core';
import { ApiadmincongeService } from './../../service/apiadminconge.service';

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';


@Component({
  selector: 'app-adminlistconge',
  templateUrl: './adminlistconge.component.html',
  styleUrls: ['./adminlistconge.component.css']
})
export class AdminlistcongeComponent implements OnInit {
  
  conge:any = [];
  constructor(private apiService: ApiadmincongeService) { 
    this.readconge();
  }
  ngOnInit() {}
  readconge(){
    this.apiService.getconges().subscribe((data) => {
     this.conge = data;
    })    
  }
  removeconge(conge, index) {
    if(window.confirm('Are you sure?')) {
        this.apiService.deleteconge(conge._id).subscribe((data) => {
          this.conge.splice(index, 1);
        }
      )    
    }
  }

  public openPDF(): void {
  let DATA: any = document.getElementById('htmlData');
  html2canvas(DATA).then((canvas) => {
    let fileWidth = 208;
    let fileHeight = (canvas.height * fileWidth) / canvas.width;
    const FILEURI = canvas.toDataURL('image/png');
    let PDF = new jsPDF('p', 'mm', 'a4');
    let position = 0;
    PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
    PDF.save('angular-demo.pdf');
  });
}


}