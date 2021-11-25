import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'localizeDate'
})
export class LocalizeDatePipe implements PipeTransform {

  /**
   * 
   * 
   * @param date date to transform
   * @param format string in 'YYYY MM DD' or 'YYYY TM DD' TM is month as text ex:NOV
   * @param locale 'string default en-US'
   * @returns  string transformed string
   */
  transform(date: Date,format: string, locale?: string): unknown {
    // const loc = locale || 'en-US';
    return format
    .replace('YYYY', date.toLocaleString(locale,{year:'numeric'}))
    .replace('MM', date.toLocaleString(locale, {month:'numeric'}))
    .replace('TM', date.toLocaleString(locale, {month: 'short'}))
    .replace('DD', date.toLocaleString(locale, {day: 'numeric'}))
  }

}
