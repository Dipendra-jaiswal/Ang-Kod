import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-test',
  // template: ``,
   //styles: ['div {background-color: red;}']          
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'] 
})
export class TestComponent implements OnInit {
  //interpolation or one way binding
  isDisable: boolean = true;
 imagePath: string = "/assets/image/dan.jpg";
 colspan:number = 2;
 classesToApply: string = 'italicsClass boldClass';
 applyBoldClass: boolean = true;
 applyItalicsClass: boolean = false;

 isBold:boolean = true;
 fontSize: number = 30;
 isItalics: boolean = true;

 teststr = 'Two Way Binding';
 teststrauto = 'Two Way Binding';

 addClasses(){
   let classes = {
        boldClass: this.applyBoldClass,
        italicsClass: this.applyItalicsClass
   };
   return classes;
 }

 addStyles(){
  let styless = {
    'font-size.px': this.fontSize,
    'font-weight': this.isBold? 'bold' : 'normal',
    'font-style': this.isItalics? 'italic' : 'normal',

};
return styless;
}

addEvent(){
  alert('click event test');
}

  constructor() { }

  ngOnInit() {
  }

}
