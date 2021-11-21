import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Mode } from '../models/mode-enum';

@Component({
  selector: 'lib-ngx-simple-date-picker',
  templateUrl: './ngx-simple-date-picker.component.html',
  styleUrls: ['./ngx-simple-date-picker.component.css'],
})
export class NgxSimpleDatePickerComponent implements OnInit {

  @Input('config')
  config!:{locale: string, minDate: Date, maxDate: Date, date: Date};

  @Output()
  clickOutEvent: EventEmitter<any> = new EventEmitter();

  @Output()
  daySelectedEvent: EventEmitter<any> = new EventEmitter();

  @Output()
  monthSelectedEvent: EventEmitter<any> = new EventEmitter();

  @Output()
  yearSelectedEvent: EventEmitter<any> = new EventEmitter();

  daysOfWeekArray!: string[];
  monthsArray!: string[];
  yearsDisplayRange = 10;
  yearsPerRangeArray!: string[];

  mode = Mode.DAY;
  currentDate!: Date;
  datesOfCurrentMonthArray!: Date[];
  
  constructor() { }

  ngOnInit(): void {
  }

}
