import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from '../model/employee';
import { EmpserviceService } from '../service/empservice.service';

@Component({
  selector: 'app-employeelogin',
  templateUrl: './employeelogin.component.html',
  styleUrls: ['./employeelogin.component.css']
})
export class EmployeeloginComponent implements OnInit {

  formSubmitted=false;
  name: FormControl =new FormControl('',[Validators.required,Validators.minLength(10)]);
  id: FormControl =new FormControl('',[Validators.required,Validators.minLength(5)]);
  phone: FormControl =new FormControl('',[Validators.required,Validators.minLength(10)]);
  email: FormControl =new FormControl('',[Validators.required,Validators.minLength(5)]);
  location: FormControl =new FormControl('',[Validators.required,Validators.minLength(5)]);
  password: FormControl =new FormControl('',[Validators.required,Validators.minLength(4)]);
  myForm: FormGroup =new FormGroup(
    {
     
      'name':this.name,
      'id':this.id,
      'phone':this.phone,
      'email':this.email,
      'location':this.location,
      'password':this.password
      

    }
  )

  constructor(private empService:EmpserviceService,private router:Router) { }

  ngOnInit(): void {
  }
  addEmployee(emp:Employee){
this.empService.addEmployee(emp)
this.formSubmitted=true;

this.router.navigateByUrl('/empdashboard');
  }

}
