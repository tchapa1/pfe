

import { Component, OnInit } from '@angular/core';
import { ApiadminavancementprojetService } from './../../service/apiadminavancementprojet.service';


import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';


@Component({
  selector: 'app-adminlistavancementprojet',
  templateUrl: './adminlistavancementprojet.component.html',
  styleUrls: ['./adminlistavancementprojet.component.css']
})
export class AdminlistavancementprojetComponent implements OnInit {
  
  avancementprojet:any = [];
  constructor(private apiService: ApiadminavancementprojetService) { 
    this.readavancementprojet();
  }
  ngOnInit() {}
  readavancementprojet(){
    this.apiService.getavancementprojets().subscribe((data) => {
     this.avancementprojet = data;
    })    
  }
  removeavancementprojet(avancementprojet, index) {
    if(window.confirm('Are you sure?')) {
        this.apiService.deleteavancementprojet(avancementprojet._id).subscribe((data) => {
          this.avancementprojet.splice(index, 1);
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