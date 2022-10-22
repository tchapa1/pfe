





import { Component, OnInit } from '@angular/core';
import { ApiadminpdgService } from './../../service/apiadminpdg.service';

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';



@Component({
  selector: 'app-adminlistpdg',
  templateUrl: './adminlistpdg.component.html',
  styleUrls: ['./adminlistpdg.component.css']
})
export class AdminlistpdgComponent implements OnInit {
  
  pdg:any = [];
  constructor(private apiService: ApiadminpdgService) { 
    this.readpdg();
  }
  ngOnInit() {}
  readpdg(){
    this.apiService.getpdgs().subscribe((data) => {
     this.pdg = data;
    })    
  }
  removepdg(pdg, index) {
    if(window.confirm('Are you sure?')) {
        this.apiService.deletepdg(pdg._id).subscribe((data) => {
          this.pdg.splice(index, 1);
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