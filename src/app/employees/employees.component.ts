import { EmployeesService } from './../services/employees.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  employees = [];
  constructor(private employeeService: EmployeesService) { }

  ngOnInit() {
    this.employeeService.getEmployees().subscribe(response =>{
      let employees = JSON.parse(JSON.stringify(response));
      this.employees = [...employees]
    });
  }

  

}
