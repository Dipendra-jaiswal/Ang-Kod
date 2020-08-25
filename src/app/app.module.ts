import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { TestComponent } from './component/test/test.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { MathCalPipe } from './math-cal.pipe';
import { EmployeeCountComponent } from './employee-list/employee-count.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    TestComponent,
    EmployeeComponent,
    EmployeeListComponent,
    MathCalPipe,
    EmployeeCountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  exports:[],
  providers: [FirstComponentComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
