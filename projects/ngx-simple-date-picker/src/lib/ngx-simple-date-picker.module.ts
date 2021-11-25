import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxSimpleDatePickerComponent } from './components/ngx-simple-date-picker.component';
import { LocalizeDatePipe } from './pipes/localize/localize-date.pipe';
import { LocalizedMonthByIndexPipe } from './pipes/localize/localized-month-by-index.pipe';
import { LocalizeNumbersPipe } from './pipes/localize/localize-numbers.pipe';
import { LocalizedDayOfWeekPipe } from './pipes/localize/localized-day-of-week.pipe';
import { LocalizeDirectionOfWritingPipe } from './pipes/localize/localize-direction-of-writing.pipe';



@NgModule({
  declarations: [
    NgxSimpleDatePickerComponent,
    LocalizeDatePipe,
    LocalizedMonthByIndexPipe,
    LocalizeNumbersPipe,
    LocalizedDayOfWeekPipe,
    LocalizeDirectionOfWritingPipe
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    NgxSimpleDatePickerComponent
  ]
})
export class NgxSimpleDatePickerModule { }
