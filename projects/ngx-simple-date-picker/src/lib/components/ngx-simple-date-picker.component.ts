import { Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Mode } from '../models/mode-enum';

@Component({
  selector: 'lib-ngx-simple-date-picker',
  templateUrl: './ngx-simple-date-picker.component.html',
  styleUrls: ['./ngx-simple-date-picker.component.css'],
  host: {
    '(document:click)': 'onClick($event)',
  },
})
export class NgxSimpleDatePickerComponent implements OnInit {

  @Input('config')
  config!:{locale?: string, minDate?: Date, maxDate?: Date, date?: Date};

  @Output()
  clickOutEvent: EventEmitter<any> = new EventEmitter();

  @Output()
  dateSelectedEvent: EventEmitter<any> = new EventEmitter();

  daysOfWeekArray!: string[];
  monthsArray!: string[];
  yearsDisplayRange = 10;
  yearsPerRangeArray!: string[];

  mode = Mode.DAY;
  currentDate!: Date;
  datesOfCurrentMonthArray!: Date[];
  
  constructor(private eRef: ElementRef,) { 
    this.config={locale:'en-US', minDate: new Date(1970,1,1)};
    this.currentDate = new Date();
    this.daysOfWeekArray = ['S','M','T','W', 'T', 'F', 'S'];
    this.monthsArray = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    this.yearsPerRangeArray = ["2020", "2021", "2022", "2023", "2024", "2025", "2026", "2027", "2028", "2029"];
  }

  ngOnInit(): void {
  }

  changeMood(mode: Mode): void{

  }

  onClick(event: any) {
    if (!this.eRef.nativeElement.contains(event.target)){
      this.clickOutEvent.emit(event);
   }
  }
}
