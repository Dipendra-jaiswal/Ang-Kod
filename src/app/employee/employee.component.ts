import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  firstName: string = "Ram";
  lastName: string = "Lal";
  gender: string =   "Male";
  age: number = 20;

  constructor() { }

  ngOnInit() {
  }

}
