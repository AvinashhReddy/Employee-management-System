import { EmpserviceService } from './../service/empservice.service';
import { Employee } from './../model/employee';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mandashboard',
  templateUrl: './mandashboard.component.html',
  styleUrls: ['./mandashboard.component.css']
})
export class MandashboardComponent implements OnInit {
emps:Employee[]
  constructor(empservice :EmpserviceService) { 
    this.emps=empservice.getemployees()
  }

  ngOnInit(): void {
  }

}
