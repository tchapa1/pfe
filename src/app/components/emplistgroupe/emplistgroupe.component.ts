


import { Component, OnInit } from '@angular/core';
import { ApiempgroupeService } from './../../service/apiempgroupe.service';


import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';


@Component({
  selector: 'app-emplistgroupe',
  templateUrl: './emplistgroupe.component.html',
  styleUrls: ['./emplistgroupe.component.css']
})
export class EmplistgroupeComponent implements OnInit {
  
  groupe:any = [];
  constructor(private apiService: ApiempgroupeService) { 
    this.readgroupe();
  }
  ngOnInit() {}
  readgroupe(){
    this.apiService.getgroupes().subscribe((data) => {
     this.groupe = data;
    })    
  }
  removegroupe(groupe, index) {
    if(window.confirm('Are you sure?')) {
        this.apiService.deletegroupe(groupe._id).subscribe((data) => {
          this.groupe.splice(index, 1);
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