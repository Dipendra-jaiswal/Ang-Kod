import { Component, OnInit, Injectable } from '@angular/core';

[Injectable]
@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {

  constructor() { 
   

  }

  ngOnInit() {
  }

  getSum(a:number,b:number): number{
    return a+b;
  }

}
