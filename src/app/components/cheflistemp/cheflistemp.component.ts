
import { Component, OnInit } from '@angular/core';
import { ApichefempService } from './../../service/apichefemp.service';


import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';



@Component({
  selector: 'app-cheflistemp',
  templateUrl: './cheflistemp.component.html',
  styleUrls: ['./cheflistemp.component.css']
})
export class CheflistempComponent implements OnInit {
  
  emp:any = [];
  constructor(private apiService: ApichefempService) { 
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