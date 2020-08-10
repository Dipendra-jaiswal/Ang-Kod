import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mathCal',
  pure: true   //pure if true and impure if false
})
export class MathCalPipe implements PipeTransform {

  transform(num: number): number {
    return num * 10;
  }

}
