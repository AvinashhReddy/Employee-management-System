import { MandashboardComponent } from './mandashboard/mandashboard.component';
import { EmpdashboardComponent } from './empdashboard/empdashboard.component';
import { ManagerloginComponent } from './managerlogin/managerlogin.component';
import { EmployeeloginComponent } from './employeelogin/employeelogin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'employee',component:EmployeeloginComponent},
  {path:'manager',component:ManagerloginComponent},
  {path:'empdashboard',component:EmpdashboardComponent},
  {path:'mandashboard',component:MandashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
