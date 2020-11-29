import { EmpserviceService } from './service/empservice.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EmployeeloginComponent } from './employeelogin/employeelogin.component';
import { ManagerloginComponent } from './managerlogin/managerlogin.component';
import { EmpdashboardComponent } from './empdashboard/empdashboard.component';
import { MandashboardComponent } from './mandashboard/mandashboard.component';

@NgModule({
  declarations: [
    AppComponent,
 
    EmployeeloginComponent,
 
    ManagerloginComponent,
 
    EmpdashboardComponent,
 
    MandashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [EmpserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
