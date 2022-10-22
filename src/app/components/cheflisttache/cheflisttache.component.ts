


import { Component, OnInit } from '@angular/core';
import { ApicheftacheService } from './../../service/apicheftache.service';

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';


@Component({
  selector: 'app-cheflisttache',
  templateUrl: './cheflisttache.component.html',
  styleUrls: ['./cheflisttache.component.css']
})
export class CheflisttacheComponent implements OnInit {
  
  tache:any = [];
  constructor(private apiService: ApicheftacheService) { 
    this.readtache();
  }
  ngOnInit() {}
  readtache(){
    this.apiService.gettaches().subscribe((data) => {
     this.tache = data;
    })    
  }
  removetache(tache, index) {
    if(window.confirm('Are you sure?')) {
        this.apiService.deletetache(tache._id).subscribe((data) => {
          this.tache.splice(index, 1);
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