import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'localizedMonthByIndex'
})
export class LocalizedMonthByIndexPipe implements PipeTransform {
  readonly date = new Date();
  transform(monthIndex: number, locale?: string): unknown {
    this.date.setMonth(monthIndex);
    return this.date.toLocaleString(locale, { month: 'long' });
  }

}
