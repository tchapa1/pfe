import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpcreateprojetComponent } from './components/empcreateprojet/empcreateprojet.component';
import { EmpcreatetacheComponent } from './components/empcreatetache/empcreatetache.component';
import { EmpcreatemessageComponent } from './components/empcreatemessage/empcreatemessage.component';
import { EmpcreatenotifComponent } from './components/empcreatenotif/empcreatenotif.component';
import { EmpcreatecongeComponent } from './components/empcreateconge/empcreateconge.component';
import { EmpcreateabsenceComponent } from './components/empcreateabsence/empcreateabsence.component';
import { EmpcreateempComponent } from './components/empcreateemp/empcreateemp.component';
import { EmpcreateadminComponent } from './components/empcreateadmin/empcreateadmin.component';
import { EmpcreatepdgComponent } from './components/empcreatepdg/empcreatepdg.component';
import { EmpcreatechefComponent } from './components/empcreatechef/empcreatechef.component';
import { EmpcreateavancementtacheComponent } from './components/empcreateavancementtache/empcreateavancementtache.component';
import { EmpcreateavancementprojetComponent } from './components/empcreateavancementprojet/empcreateavancementprojet.component';
import { EmpeditprojetComponent } from './components/empeditprojet/empeditprojet.component';
import { EmpedittacheComponent } from './components/empedittache/empedittache.component';
import { EmpeditmessageComponent } from './components/empeditmessage/empeditmessage.component';
import { EmpeditnotifComponent } from './components/empeditnotif/empeditnotif.component';
import { EmpeditcongeComponent } from './components/empeditconge/empeditconge.component';
import { EmpeditabsenceComponent } from './components/empeditabsence/empeditabsence.component';
import { EmpeditempComponent } from './components/empeditemp/empeditemp.component';
import { EmpeditadminComponent } from './components/empeditadmin/empeditadmin.component';
import { EmpeditpdgComponent } from './components/empeditpdg/empeditpdg.component';
import { EmpeditchefComponent } from './components/empeditchef/empeditchef.component';
import { EmpeditavancementtacheComponent } from './components/empeditavancementtache/empeditavancementtache.component';
import { EmpeditavancementprojetComponent } from './components/empeditavancementprojet/empeditavancementprojet.component';
import { EmplistprojetComponent } from './components/emplistprojet/emplistprojet.component';
import { EmplisttacheComponent } from './components/emplisttache/emplisttache.component';
import { EmplistmessageComponent } from './components/emplistmessage/emplistmessage.component';
import { EmplistnotifComponent } from './components/emplistnotif/emplistnotif.component';
import { EmplistcongeComponent } from './components/emplistconge/emplistconge.component';
import { EmplistabsenceComponent } from './components/emplistabsence/emplistabsence.component';
import { EmplistempComponent } from './components/emplistemp/emplistemp.component';
import { EmplistadminComponent } from './components/emplistadmin/emplistadmin.component';
import { EmplistpdgComponent } from './components/emplistpdg/emplistpdg.component';
import { EmplistchefComponent } from './components/emplistchef/emplistchef.component';
import { EmplistavancementtacheComponent } from './components/emplistavancementtache/emplistavancementtache.component';
import { EmplistavancementprojetComponent } from './components/emplistavancementprojet/emplistavancementprojet.component';
import { AdmincreateprojetComponent } from './components/admincreateprojet/admincreateprojet.component';
import { AdmincreatetacheComponent } from './components/admincreatetache/admincreatetache.component';
import { AdmincreatemessageComponent } from './components/admincreatemessage/admincreatemessage.component';
import { AdmincreatenotifComponent } from './components/admincreatenotif/admincreatenotif.component';
import { AdmincreatecongeComponent } from './components/admincreateconge/admincreateconge.component';
import { AdmincreateabsenceComponent } from './components/admincreateabsence/admincreateabsence.component';
import { AdmincreateempComponent } from './components/admincreateemp/admincreateemp.component';
import { AdmincreateadminComponent } from './components/admincreateadmin/admincreateadmin.component';
import { AdmincreatepdgComponent } from './components/admincreatepdg/admincreatepdg.component';
import { AdmincreatechefComponent } from './components/admincreatechef/admincreatechef.component';
import { AdmincreateavancementtacheComponent } from './components/admincreateavancementtache/admincreateavancementtache.component';
import { AdmincreateavancementprojetComponent } from './components/admincreateavancementprojet/admincreateavancementprojet.component';
import { AdmineditprojetComponent } from './components/admineditprojet/admineditprojet.component';
import { AdminedittacheComponent } from './components/adminedittache/adminedittache.component';
import { AdmineditmessageComponent } from './components/admineditmessage/admineditmessage.component';
import { AdmineditnotifComponent } from './components/admineditnotif/admineditnotif.component';
import { AdmineditcongeComponent } from './components/admineditconge/admineditconge.component';
import { AdmineditabsenceComponent } from './components/admineditabsence/admineditabsence.component';
import { AdmineditempComponent } from './components/admineditemp/admineditemp.component';
import { AdmineditadminComponent } from './components/admineditadmin/admineditadmin.component';
import { AdmineditpdgComponent } from './components/admineditpdg/admineditpdg.component';
import { AdmineditchefComponent } from './components/admineditchef/admineditchef.component';
import { AdmineditavancementtacheComponent } from './components/admineditavancementtache/admineditavancementtache.component';
import { AdmineditavancementprojetComponent } from './components/admineditavancementprojet/admineditavancementprojet.component';
import { AdminlistprojetComponent } from './components/adminlistprojet/adminlistprojet.component';
import { AdminlisttacheComponent } from './components/adminlisttache/adminlisttache.component';
import { AdminlistmessageComponent } from './components/adminlistmessage/adminlistmessage.component';
import { AdminlistnotifComponent } from './components/adminlistnotif/adminlistnotif.component';
import { AdminlistcongeComponent } from './components/adminlistconge/adminlistconge.component';
import { AdminlistabsenceComponent } from './components/adminlistabsence/adminlistabsence.component';
import { AdminlistempComponent } from './components/adminlistemp/adminlistemp.component';
import { AdminlistadminComponent } from './components/adminlistadmin/adminlistadmin.component';
import { AdminlistpdgComponent } from './components/adminlistpdg/adminlistpdg.component';
import { AdminlistchefComponent } from './components/adminlistchef/adminlistchef.component';
import { AdminlistavancementtacheComponent } from './components/adminlistavancementtache/adminlistavancementtache.component';
import { AdminlistavancementprojetComponent } from './components/adminlistavancementprojet/adminlistavancementprojet.component';
import { PdgcreateprojetComponent } from './components/pdgcreateprojet/pdgcreateprojet.component';
import { PdgcreatetacheComponent } from './components/pdgcreatetache/pdgcreatetache.component';
import { PdgcreatemessageComponent } from './components/pdgcreatemessage/pdgcreatemessage.component';
import { PdgcreatenotifComponent } from './components/pdgcreatenotif/pdgcreatenotif.component';
import { PdgcreatecongeComponent } from './components/pdgcreateconge/pdgcreateconge.component';
import { PdgcreateabsenceComponent } from './components/pdgcreateabsence/pdgcreateabsence.component';
import { PdgcreateempComponent } from './components/pdgcreateemp/pdgcreateemp.component';
import { PdgcreateadminComponent } from './components/pdgcreateadmin/pdgcreateadmin.component';
import { PdgcreatepdgComponent } from './components/pdgcreatepdg/pdgcreatepdg.component';
import { PdgcreatechefComponent } from './components/pdgcreatechef/pdgcreatechef.component';
import { PdgcreateavancementtacheComponent } from './components/pdgcreateavancementtache/pdgcreateavancementtache.component';
import { PdgcreateavancementprojetComponent } from './components/pdgcreateavancementprojet/pdgcreateavancementprojet.component';
import { PdgeditprojetComponent } from './components/pdgeditprojet/pdgeditprojet.component';
import { PdgedittacheComponent } from './components/pdgedittache/pdgedittache.component';
import { PdgeditmessageComponent } from './components/pdgeditmessage/pdgeditmessage.component';
import { PdgeditnotifComponent } from './components/pdgeditnotif/pdgeditnotif.component';
import { PdgeditcongeComponent } from './components/pdgeditconge/pdgeditconge.component';
import { PdgeditabsenceComponent } from './components/pdgeditabsence/pdgeditabsence.component';
import { PdgeditempComponent } from './components/pdgeditemp/pdgeditemp.component';
import { PdgeditadminComponent } from './components/pdgeditadmin/pdgeditadmin.component';
import { PdgeditpdgComponent } from './components/pdgeditpdg/pdgeditpdg.component';
import { PdgeditchefComponent } from './components/pdgeditchef/pdgeditchef.component';
import { PdgeditavancementtacheComponent } from './components/pdgeditavancementtache/pdgeditavancementtache.component';
import { PdgeditavancementprojetComponent } from './components/pdgeditavancementprojet/pdgeditavancementprojet.component';
import { PdglistprojetComponent } from './components/pdglistprojet/pdglistprojet.component';
import { PdglisttacheComponent } from './components/pdglisttache/pdglisttache.component';
import { PdglistmessageComponent } from './components/pdglistmessage/pdglistmessage.component';
import { PdglistnotifComponent } from './components/pdglistnotif/pdglistnotif.component';
import { PdglistcongeComponent } from './components/pdglistconge/pdglistconge.component';
import { PdglistabsenceComponent } from './components/pdglistabsence/pdglistabsence.component';
import { PdglistempComponent } from './components/pdglistemp/pdglistemp.component';
import { PdglistadminComponent } from './components/pdglistadmin/pdglistadmin.component';
import { PdglistpdgComponent } from './components/pdglistpdg/pdglistpdg.component';
import { PdglistchefComponent } from './components/pdglistchef/pdglistchef.component';
import { PdglistavancementtacheComponent } from './components/pdglistavancementtache/pdglistavancementtache.component';
import { PdglistavancementprojetComponent } from './components/pdglistavancementprojet/pdglistavancementprojet.component';
import { ChefcreateprojetComponent } from './components/chefcreateprojet/chefcreateprojet.component';
import { ChefcreatetacheComponent } from './components/chefcreatetache/chefcreatetache.component';
import { ChefcreatemessageComponent } from './components/chefcreatemessage/chefcreatemessage.component';
import { ChefcreatenotifComponent } from './components/chefcreatenotif/chefcreatenotif.component';
import { ChefcreatecongeComponent } from './components/chefcreateconge/chefcreateconge.component';
import { ChefcreateabsenceComponent } from './components/chefcreateabsence/chefcreateabsence.component';
import { ChefcreateempComponent } from './components/chefcreateemp/chefcreateemp.component';
import { ChefcreateadminComponent } from './components/chefcreateadmin/chefcreateadmin.component';
import { ChefcreatepdgComponent } from './components/chefcreatepdg/chefcreatepdg.component';
import { ChefcreatechefComponent } from './components/chefcreatechef/chefcreatechef.component';
import { ChefcreateavancementtacheComponent } from './components/chefcreateavancementtache/chefcreateavancementtache.component';
import { ChefcreateavancementprojetComponent } from './components/chefcreateavancementprojet/chefcreateavancementprojet.component';
import { ChefeditprojetComponent } from './components/chefeditprojet/chefeditprojet.component';
import { ChefedittacheComponent } from './components/chefedittache/chefedittache.component';
import { ChefeditmessageComponent } from './components/chefeditmessage/chefeditmessage.component';
import { ChefeditnotifComponent } from './components/chefeditnotif/chefeditnotif.component';
import { ChefeditcongeComponent } from './components/chefeditconge/chefeditconge.component';
import { ChefeditabsenceComponent } from './components/chefeditabsence/chefeditabsence.component';
import { ChefeditempComponent } from './components/chefeditemp/chefeditemp.component';
import { ChefeditadminComponent } from './components/chefeditadmin/chefeditadmin.component';
import { ChefeditpdgComponent } from './components/chefeditpdg/chefeditpdg.component';
import { ChefeditchefComponent } from './components/chefeditchef/chefeditchef.component';
import { ChefeditavancementtacheComponent } from './components/chefeditavancementtache/chefeditavancementtache.component';
import { ChefeditavancementprojetComponent } from './components/chefeditavancementprojet/chefeditavancementprojet.component';
import { CheflistprojetComponent } from './components/cheflistprojet/cheflistprojet.component';
import { CheflisttacheComponent } from './components/cheflisttache/cheflisttache.component';
import { CheflistmessageComponent } from './components/cheflistmessage/cheflistmessage.component';
import { CheflistnotifComponent } from './components/cheflistnotif/cheflistnotif.component';
import { CheflistcongeComponent } from './components/cheflistconge/cheflistconge.component';
import { CheflistabsenceComponent } from './components/cheflistabsence/cheflistabsence.component';
import { CheflistempComponent } from './components/cheflistemp/cheflistemp.component';
import { CheflistadminComponent } from './components/cheflistadmin/cheflistadmin.component';
import { CheflistpdgComponent } from './components/cheflistpdg/cheflistpdg.component';
import { CheflistchefComponent } from './components/cheflistchef/cheflistchef.component';
import { CheflistavancementtacheComponent } from './components/cheflistavancementtache/cheflistavancementtache.component';
import { CheflistavancementprojetComponent } from './components/cheflistavancementprojet/cheflistavancementprojet.component';
import { ChefheaderComponent } from './components/chefheader/chefheader.component';
import { EmpheaderComponent } from './components/empheader/empheader.component';
import { AdminheaderComponent } from './components/adminheader/adminheader.component';
import { PdgheaderComponent } from './components/pdgheader/pdgheader.component';
import { CheffooterComponent } from './components/cheffooter/cheffooter.component';
import { EmpfooterComponent } from './components/empfooter/empfooter.component';
import { PdgfooterComponent } from './components/pdgfooter/pdgfooter.component';
import { AdminfooterComponent } from './components/adminfooter/adminfooter.component';
import { ChefmenuComponent } from './components/chefmenu/chefmenu.component';
import { AdminmenuComponent } from './components/adminmenu/adminmenu.component';
import { EmpmenuComponent } from './components/empmenu/empmenu.component';
import { PdgmenuComponent } from './components/pdgmenu/pdgmenu.component';
import { ChefloginComponent } from './components/cheflogin/cheflogin.component';
import { EmploginComponent } from './components/emplogin/emplogin.component';
import { AdminloginComponent } from './components/adminlogin/adminlogin.component';
import { PdgloginComponent } from './components/pdglogin/pdglogin.component';
import { IndexapplicationComponent } from './components/indexapplication/indexapplication.component';
import { ChefcreategroupeComponent } from './components/chefcreategroupe/chefcreategroupe.component';
import { ChefeditgroupeComponent } from './components/chefeditgroupe/chefeditgroupe.component';
import { CheflistgroupeComponent } from './components/cheflistgroupe/cheflistgroupe.component';
import { EmpcreategroupeComponent } from './components/empcreategroupe/empcreategroupe.component';
import { EmpeditgroupeComponent } from './components/empeditgroupe/empeditgroupe.component';
import { EmplistgroupeComponent } from './components/emplistgroupe/emplistgroupe.component';
import { PdgcreategroupeComponent } from './components/pdgcreategroupe/pdgcreategroupe.component';
import { PdgeditgroupeComponent } from './components/pdgeditgroupe/pdgeditgroupe.component';
import { PdglistgroupeComponent } from './components/pdglistgroupe/pdglistgroupe.component';
import { AdmincreategroupeComponent } from './components/admincreategroupe/admincreategroupe.component';
import { AdmineditgroupeComponent } from './components/admineditgroupe/admineditgroupe.component';
import { AdminlistgroupeComponent } from './components/adminlistgroupe/adminlistgroupe.component';



import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    EmpcreateprojetComponent,
    EmpcreatetacheComponent,
    EmpcreatemessageComponent,
    EmpcreatenotifComponent,
    EmpcreatecongeComponent,
    EmpcreateabsenceComponent,
    EmpcreateempComponent,
    EmpcreateadminComponent,
    EmpcreatepdgComponent,
    EmpcreatechefComponent,
    EmpcreateavancementtacheComponent,
    EmpcreateavancementprojetComponent,
    EmpeditprojetComponent,
    EmpedittacheComponent,
    EmpeditmessageComponent,
    EmpeditnotifComponent,
    EmpeditcongeComponent,
    EmpeditabsenceComponent,
    EmpeditempComponent,
    EmpeditadminComponent,
    EmpeditpdgComponent,
    EmpeditchefComponent,
    EmpeditavancementtacheComponent,
    EmpeditavancementprojetComponent,
    EmplistprojetComponent,
    EmplisttacheComponent,
    EmplistmessageComponent,
    EmplistnotifComponent,
    EmplistcongeComponent,
    EmplistabsenceComponent,
    EmplistempComponent,
    EmplistadminComponent,
    EmplistpdgComponent,
    EmplistchefComponent,
    EmplistavancementtacheComponent,
    EmplistavancementprojetComponent,
    AdmincreateprojetComponent,
    AdmincreatetacheComponent,
    AdmincreatemessageComponent,
    AdmincreatenotifComponent,
    AdmincreatecongeComponent,
    AdmincreateabsenceComponent,
    AdmincreateempComponent,
    AdmincreateadminComponent,
    AdmincreatepdgComponent,
    AdmincreatechefComponent,
    AdmincreateavancementtacheComponent,
    AdmincreateavancementprojetComponent,
    AdmineditprojetComponent,
    AdminedittacheComponent,
    AdmineditmessageComponent,
    AdmineditnotifComponent,
    AdmineditcongeComponent,
    AdmineditabsenceComponent,
    AdmineditempComponent,
    AdmineditadminComponent,
    AdmineditpdgComponent,
    AdmineditchefComponent,
    AdmineditavancementtacheComponent,
    AdmineditavancementprojetComponent,
    AdminlistprojetComponent,
    AdminlisttacheComponent,
    AdminlistmessageComponent,
    AdminlistnotifComponent,
    AdminlistcongeComponent,
    AdminlistabsenceComponent,
    AdminlistempComponent,
    AdminlistadminComponent,
    AdminlistpdgComponent,
    AdminlistchefComponent,
    AdminlistavancementtacheComponent,
    AdminlistavancementprojetComponent,
    PdgcreateprojetComponent,
    PdgcreatetacheComponent,
    PdgcreatemessageComponent,
    PdgcreatenotifComponent,
    PdgcreatecongeComponent,
    PdgcreateabsenceComponent,
    PdgcreateempComponent,
    PdgcreateadminComponent,
    PdgcreatepdgComponent,
    PdgcreatechefComponent,
    PdgcreateavancementtacheComponent,
    PdgcreateavancementprojetComponent,
    PdgeditprojetComponent,
    PdgedittacheComponent,
    PdgeditmessageComponent,
    PdgeditnotifComponent,
    PdgeditcongeComponent,
    PdgeditabsenceComponent,
    PdgeditempComponent,
    PdgeditadminComponent,
    PdgeditpdgComponent,
    PdgeditchefComponent,
    PdgeditavancementtacheComponent,
    PdgeditavancementprojetComponent,
    PdglistprojetComponent,
    PdglisttacheComponent,
    PdglistmessageComponent,
    PdglistnotifComponent,
    PdglistcongeComponent,
    PdglistabsenceComponent,
    PdglistempComponent,
    PdglistadminComponent,
    PdglistpdgComponent,
    PdglistchefComponent,
    PdglistavancementtacheComponent,
    PdglistavancementprojetComponent,
    ChefcreateprojetComponent,
    ChefcreatetacheComponent,
    ChefcreatemessageComponent,
    ChefcreatenotifComponent,
    ChefcreatecongeComponent,
    ChefcreateabsenceComponent,
    ChefcreateempComponent,
    ChefcreateadminComponent,
    ChefcreatepdgComponent,
    ChefcreatechefComponent,
    ChefcreateavancementtacheComponent,
    ChefcreateavancementprojetComponent,
    ChefeditprojetComponent,
    ChefedittacheComponent,
    ChefeditmessageComponent,
    ChefeditnotifComponent,
    ChefeditcongeComponent,
    ChefeditabsenceComponent,
    ChefeditempComponent,
    ChefeditadminComponent,
    ChefeditpdgComponent,
    ChefeditchefComponent,
    ChefeditavancementtacheComponent,
    ChefeditavancementprojetComponent,
    CheflistprojetComponent,
    CheflisttacheComponent,
    CheflistmessageComponent,
    CheflistnotifComponent,
    CheflistcongeComponent,
    CheflistabsenceComponent,
    CheflistempComponent,
    CheflistadminComponent,
    CheflistpdgComponent,
    CheflistchefComponent,
    CheflistavancementtacheComponent,
    CheflistavancementprojetComponent,
    ChefheaderComponent,
    EmpheaderComponent,
    AdminheaderComponent,
    PdgheaderComponent,
    CheffooterComponent,
    EmpfooterComponent,
    PdgfooterComponent,
    AdminfooterComponent,
    ChefmenuComponent,
    AdminmenuComponent,
    EmpmenuComponent,
    PdgmenuComponent,
    ChefloginComponent,
    EmploginComponent,
    AdminloginComponent,
    PdgloginComponent,
    IndexapplicationComponent,
    ChefcreategroupeComponent,
    ChefeditgroupeComponent,
    CheflistgroupeComponent,
    EmpcreategroupeComponent,
    EmpeditgroupeComponent,
    EmplistgroupeComponent,
    PdgcreategroupeComponent,
    PdgeditgroupeComponent,
    PdglistgroupeComponent,
    AdmincreategroupeComponent,
    AdmineditgroupeComponent,
    AdminlistgroupeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
