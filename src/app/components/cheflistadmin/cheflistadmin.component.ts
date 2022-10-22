
import { Component, OnInit } from '@angular/core';
import { ApichefadminService } from './../../service/apichefadmin.service';


import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';



@Component({
  selector: 'app-cheflistadmin',
  templateUrl: './cheflistadmin.component.html',
  styleUrls: ['./cheflistadmin.component.css']
})
export class CheflistadminComponent implements OnInit {

  
  admin:any = [];
  constructor(private apiService: ApichefadminService) { 
    this.readadmin();
  }
  ngOnInit() {}
  readadmin(){
    this.apiService.getadmins().subscribe((data) => {
     this.admin = data;
    })    
  }
  removeadmin(admin, index) {
    if(window.confirm('Are you sure?')) {
        this.apiService.deleteadmin(admin._id).subscribe((data) => {
          this.admin.splice(index, 1);
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