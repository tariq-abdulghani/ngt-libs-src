import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'localizedDayOfWeek'
})
export class LocalizedDayOfWeekPipe implements PipeTransform {
  readonly date!: Date; 
  readonly shift!: number; 
  readonly weekDay!: Date[];
  constructor(){
    this.date = new Date();
    this.date.setDate(1);
    this.shift = this.date.getDay() != 0 ? this.date.getDay() : 0;
  }
  transform(index: number, locale?: string): unknown {
    this.date.setDate(index + 8 - this.shift)
    return this.date.toLocaleString(locale,{ weekday: 'narrow' });
  }

}
