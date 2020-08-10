import { Component } from '@angular/core';
import { FirstComponentComponent } from './first-component/first-component.component';

@Component({
  selector: 'app-root',
  template: `<div>
              <h1>Employee Details</h1>
              <!--<app-employee></app-employee>--> 
              <app-employee-list></app-employee-list>
              </div>`,
 // templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my first angular project';
  sum;
  teststr = 'hhhh';
   constructor(objFirst: FirstComponentComponent) {
    this.sum = objFirst.getSum(12,13);
  }
}
