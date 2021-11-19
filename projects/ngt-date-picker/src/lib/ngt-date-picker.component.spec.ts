import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgtDatePickerComponent } from './ngt-date-picker.component';

describe('NgtDatePickerComponent', () => {
  let component: NgtDatePickerComponent;
  let fixture: ComponentFixture<NgtDatePickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgtDatePickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgtDatePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
