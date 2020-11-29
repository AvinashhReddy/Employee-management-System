import { MockData } from './../model/mockdata';
import { Employee } from './../model/employee';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpserviceService {
 empdetails:Employee[];
  constructor() {
    this.empdetails=MockData.employees;
   }
   getemployees():Employee[]{
    
    return this.empdetails;

   }
   addEmployee(emp:Employee){
     this.empdetails.push(emp)
   }
}
