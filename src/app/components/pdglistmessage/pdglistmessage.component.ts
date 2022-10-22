

import { Component, OnInit } from '@angular/core';
import { ApipdgmessageService } from './../../service/apipdgmessage.service';

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';


@Component({
  selector: 'app-pdglistmessage',
  templateUrl: './pdglistmessage.component.html',
  styleUrls: ['./pdglistmessage.component.css']
})
export class PdglistmessageComponent implements OnInit {
  
  message:any = [];
  constructor(private apiService: ApipdgmessageService) { 
    this.readmessage();
  }
  ngOnInit() {}
  readmessage(){
    this.apiService.getmessages().subscribe((data) => {
     this.message = data;
    })    
  }
  removemessage(message, index) {
    if(window.confirm('Are you sure?')) {
        this.apiService.deletemessage(message._id).subscribe((data) => {
          this.message.splice(index, 1);
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