import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {
  employees: any[];
  todate = new Date();
  customVal: number = 15;
  jsonval = {name:'ABC', age: 24, address:{a1: 'Bangalore', a2:'Koramangala'}};
  constructor(){
  this.employees = [
   {code: "e101",name: "Ram", gender: "Male",Salary: 1000},
   {code: "e102",name: "Shyam", gender: "Male",Salary: 2000},
   {code: "e103",name: "Sita", gender: "feMale",Salary: 3000},
   {code: "e104",name: "Ghanshyam", gender: "Male",Salary: 4000}
  ];
}

  GetEmployees(): void{
    this.employees = [
      {code: "e101",name: "Ram", gender: "Male",Salary: 1000},
      {code: "e102",name: "Shyam", gender: "Male",Salary: 2000},
      {code: "e103",name: "Sita", gender: "feMale",Salary: 3000},
      {code: "e104",name: "Ghanshyam", gender: "Male",Salary: 4000},
      {code: "e105",name: "Dhyam", gender: "Male",Salary: 5000}
     ];
  }

  trackByEmpCode(index: number, employee: any): string{
    return employee.code;
  }
  
}
