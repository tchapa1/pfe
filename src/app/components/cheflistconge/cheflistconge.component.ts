

import { Component, OnInit } from '@angular/core';
import { ApichefcongeService } from './../../service/apichefconge.service';

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';


@Component({
  selector: 'app-cheflistconge',
  templateUrl: './cheflistconge.component.html',
  styleUrls: ['./cheflistconge.component.css']
})
export class CheflistcongeComponent implements OnInit {
  
  conge:any = [];
  constructor(private apiService: ApichefcongeService) { 
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