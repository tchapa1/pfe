
import { Component, OnInit } from '@angular/core';
import { ApiempempService } from './../../service/apiempemp.service';

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';


@Component({
  selector: 'app-emplistemp',
  templateUrl: './emplistemp.component.html',
  styleUrls: ['./emplistemp.component.css']
})
export class EmplistempComponent implements OnInit {
  
  emp:any = [];
  constructor(private apiService: ApiempempService) { 
    this.reademp();
  }
  ngOnInit() {}
  reademp(){
    this.apiService.getemps().subscribe((data) => {
     this.emp = data;
    })    
  }
  removeemp(emp, index) {
    if(window.confirm('Are you sure?')) {
        this.apiService.deleteemp(emp._id).subscribe((data) => {
          this.emp.splice(index, 1);
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