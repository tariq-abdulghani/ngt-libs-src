import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxSimpleDatePickerComponent } from './ngx-simple-date-picker.component';

describe('NgxSimpleDatePickerComponent', () => {
  let component: NgxSimpleDatePickerComponent;
  let fixture: ComponentFixture<NgxSimpleDatePickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxSimpleDatePickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxSimpleDatePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
