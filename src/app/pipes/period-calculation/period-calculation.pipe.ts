import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'periodCalculation'
})
export class PeriodCalculationPipe implements PipeTransform {

  transform(value: number): string {
    let result: string;

    if (value >= 30) {
      result = Math.floor(value / 30) + ' months';
    } else if (value > 7) {
      result = Math.floor(value / 7) + ' weeks';
    } else {
      result = value + ' days';
    }

    return result;
  }

}
