
import { Component, OnInit } from '@angular/core';
import { ApiadminabsenceService } from './../../service/apiadminabsence.service';

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';



@Component({
  selector: 'app-adminlistabsence',
  templateUrl: './adminlistabsence.component.html',
  styleUrls: ['./adminlistabsence.component.css']
})
export class AdminlistabsenceComponent implements OnInit {
  
  absence:any = [];
  constructor(private apiService: ApiadminabsenceService) { 
    this.readabsence();
  }
  ngOnInit() {}
  readabsence(){
    this.apiService.getabsences().subscribe((data) => {
     this.absence = data;
    })    
  }
  removeabsence(absence, index) {
    if(window.confirm('Are you sure?')) {
        this.apiService.deleteabsence(absence._id).subscribe((data) => {
          this.absence.splice(index, 1);
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