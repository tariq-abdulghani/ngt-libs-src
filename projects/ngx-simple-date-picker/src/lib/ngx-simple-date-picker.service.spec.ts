import { TestBed } from '@angular/core/testing';

import { NgxSimpleDatePickerService } from './ngx-simple-date-picker.service';

describe('NgxSimpleDatePickerService', () => {
  let service: NgxSimpleDatePickerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxSimpleDatePickerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
