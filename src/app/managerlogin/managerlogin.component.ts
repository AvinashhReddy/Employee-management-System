import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-managerlogin',
  templateUrl: './managerlogin.component.html',
  styleUrls: ['./managerlogin.component.css']
})
export class ManagerloginComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  formSubmitted=false;
  
  id: FormControl =new FormControl('',[Validators.required,Validators.minLength(5)]);
 
 
  password: FormControl =new FormControl('',[Validators.required,Validators.minLength(4)]);
  myForm: FormGroup =new FormGroup(
    {
     
      
      'id':this.id,
     
      'password':this.password
      

    }
  )
  constructor(private router:Router) { }


  goToManagerDashboard(){
    this.formSubmitted=true;
    this.router.navigateByUrl('/mandashboard');

  }

}
