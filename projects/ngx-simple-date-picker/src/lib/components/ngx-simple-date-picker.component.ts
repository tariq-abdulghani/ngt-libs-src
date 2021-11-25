import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
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
  readonly MODES = Mode;

  @Input('config')
  config: { locale: string; minDate?: Date; maxDate?: Date; date?: Date };

  @Output()
  clickOutEvent: EventEmitter<any> = new EventEmitter();

  @Output()
  dateSelectedEvent: EventEmitter<any> = new EventEmitter();

  yearsDisplayRange = 10;
  yearsPerRangeArray: number[];

  mode = Mode.DAY;
  currentDate: Date;
  datesOfCurrentMonthArray: Date[];

  constructor(private eRef: ElementRef) {
    //'ar-EG' 'en-US'
    this.config = { locale: 'en-US', minDate: new Date(1970, 1, 1) };
    this.currentDate = new Date();
    this.yearsPerRangeArray = this.getYearsInRange(this.currentDate);
    this.datesOfCurrentMonthArray = this.getDatesOfCurrentMonth();
  }

  ngOnInit(): void {}

  changeMode(m: Mode): void {
    this.mode = m;
  }

  decrementMode() {
    if (this.mode > 0) this.mode--;
  }

  onClick(event: any) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.clickOutEvent.emit(event);
    }
  }

  getDatesOfCurrentMonth() {
    const firstDayInMonth = new Date(
      this.currentDate.getFullYear(),
      this.currentDate.getMonth(),
      1
    ).getDay();
    return [
      ...Array(42)
        .fill(null)
        .map(
          (e, i) =>
            new Date(
              this.currentDate.getFullYear(),
              this.currentDate.getMonth(),
              i + 1 - firstDayInMonth
            )
        ),
    ];
  }

  getYearsInRange(date: Date): number[] {
    return this.generateRange(this.getStartingYear(date));
  }

  getYearsInNextRange(date: Date): number[] {
    let startingDate = this.getStartingYear(date) + this.yearsDisplayRange;
    date.setFullYear(date.getFullYear() + this.yearsDisplayRange);
    return this.generateRange(startingDate);
  }

  getYearsInPreviousRange(date: Date): number[] {
    let startingDate = this.getStartingYear(date) - this.yearsDisplayRange;
    date.setFullYear(date.getFullYear() - this.yearsDisplayRange);
    return this.generateRange(
      this.getStartingYear(date) - this.yearsDisplayRange
    );
  }

  private getStartingYear(date: Date): number {
    return date.getFullYear() - (date.getFullYear() % this.yearsDisplayRange);
  }

  private generateRange(startingYear: number): number[] {
    return [...Array(this.yearsDisplayRange).keys()].map(
      (v) => v + startingYear
    );
  }
}
