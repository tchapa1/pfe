


import { Component, OnInit } from '@angular/core';
import { ApichefprojetService } from './../../service/apichefprojet.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-cheflistprojet',
  templateUrl: './cheflistprojet.component.html',
  styleUrls: ['./cheflistprojet.component.css']
})
export class CheflistprojetComponent implements OnInit {

  
  
  projet:any = [];
  constructor(private apiService: ApichefprojetService) { 
    this.readprojet();
  }
  ngOnInit() {}
  readprojet(){
    this.apiService.getprojets().subscribe((data) => {
     this.projet = data;
    })    
  }
  removeprojet(projet, index) {
    if(window.confirm('Are you sure?')) {
        this.apiService.deleteprojet(projet._id).subscribe((data) => {
          this.projet.splice(index, 1);
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