


import { Component, OnInit } from '@angular/core';
import { ApiadminnotifService } from './../../service/apiadminnotif.service';


import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';


@Component({
  selector: 'app-adminlistnotif',
  templateUrl: './adminlistnotif.component.html',
  styleUrls: ['./adminlistnotif.component.css']
})
export class AdminlistnotifComponent implements OnInit {
  
  notif:any = [];
  constructor(private apiService: ApiadminnotifService) { 
    this.readnotif();
  }
  ngOnInit() {}
  readnotif(){
    this.apiService.getnotifs().subscribe((data) => {
     this.notif = data;
    })    
  }
  removenotif(notif, index) {
    if(window.confirm('Are you sure?')) {
        this.apiService.deletenotif(notif._id).subscribe((data) => {
          this.notif.splice(index, 1);
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