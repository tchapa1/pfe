


import { Component, OnInit } from '@angular/core';
import { ApiadminavancementtacheService } from './../../service/apiadminavancementtache.service';

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';


@Component({
  selector: 'app-adminlistavancementtache',
  templateUrl: './adminlistavancementtache.component.html',
  styleUrls: ['./adminlistavancementtache.component.css']
})
export class AdminlistavancementtacheComponent implements OnInit {
  
  avancementtache:any = [];
  constructor(private apiService: ApiadminavancementtacheService) { 
    this.readavancementtache();
  }
  ngOnInit() {}
  readavancementtache(){
    this.apiService.getavancementtaches().subscribe((data) => {
     this.avancementtache = data;
    })    
  }
  removeavancementtache(avancementtache, index) {
    if(window.confirm('Are you sure?')) {
        this.apiService.deleteavancementtache(avancementtache._id).subscribe((data) => {
          this.avancementtache.splice(index, 1);
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