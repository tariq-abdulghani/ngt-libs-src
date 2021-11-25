import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'localizeDirectionOfWriting',
})
export class LocalizeDirectionOfWritingPipe implements PipeTransform {
  readonly rtl = ['ar-', 'zh-', 'he-', 'fa-', 'ps', 'ur'];

  transform(locale?: string): unknown {
    if (locale) {
      return this.rtl.some((str) => locale.includes(str)) ? 'rtl' : 'ltr';
    } else {
      return 'ltr';
    }
  }
}
