



import { Component, OnInit } from '@angular/core';
import { ApiempchefService } from './../../service/apiempchef.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-emplistchef',
  templateUrl: './emplistchef.component.html',
  styleUrls: ['./emplistchef.component.css']
})
export class EmplistchefComponent implements OnInit {
  
  chef:any = [];
  constructor(private apiService: ApiempchefService) { 
    this.readchef();
  }
  ngOnInit() {}
  readchef(){
    this.apiService.getchefs().subscribe((data) => {
     this.chef = data;
    })    
  }
  removechef(chef, index) {
    if(window.confirm('Are you sure?')) {
        this.apiService.deletechef(chef._id).subscribe((data) => {
          this.chef.splice(index, 1);
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