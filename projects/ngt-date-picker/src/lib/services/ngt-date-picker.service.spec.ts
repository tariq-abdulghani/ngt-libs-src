import { TestBed } from '@angular/core/testing';

import { NgtDatePickerService } from './ngt-date-picker.service';

describe('NgtDatePickerService', () => {
  let service: NgtDatePickerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgtDatePickerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
