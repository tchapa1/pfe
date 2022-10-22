import { Component, OnInit } from '@angular/core';
import { ApipdgabsenceService } from './../../service/apipdgabsence.service';
import { ApipdgcongeService } from './../../service/apipdgconge.service';
import { ApipdgempService } from './../../service/apipdgemp.service';
import { ApipdgprojetService } from './../../service/apipdgprojet.service';

@Component({
  selector: 'app-pdgheader',
  templateUrl: './pdgheader.component.html',
  styleUrls: ['./pdgheader.component.css']
})
export class PdgheaderComponent implements OnInit {


  absences:any = [];
  projets:any = [];
  employes:any = [];
  conges:any = [];



  constructor(

    private crudService: ApipdgcongeService,
    private crudService1: ApipdgempService,
    private crudService2: ApipdgprojetService,
    private crudService3: ApipdgabsenceService


  ) {

    this.crudService.getconges().subscribe(res => {
      console.log(res)
      this.conges =res;
    });  

    this.crudService1.getemps().subscribe(res => {
      console.log(res)
      this.employes =res;
    });     

    this.crudService2.getprojets().subscribe(res => {
      console.log(res)
      this.projets =res;
    });  

    this.crudService3.getabsences().subscribe(res => {
      console.log(res)
      this.absences =res;
    }); 


   }

  ngOnInit(): void {
  }

}
