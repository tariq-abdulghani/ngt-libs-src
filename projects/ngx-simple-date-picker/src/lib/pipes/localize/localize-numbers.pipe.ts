import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'localizeNumbers'
})
export class LocalizeNumbersPipe implements PipeTransform {

  transform(value:number, locale?: string): unknown {
    return value.toLocaleString(locale, {useGrouping: false});
  }

}
