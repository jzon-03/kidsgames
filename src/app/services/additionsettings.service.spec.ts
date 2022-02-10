import { TestBed } from '@angular/core/testing';

import { AdditionsettingsService } from './additionsettings.service';

describe('AdditionsettingsService', () => {
  let service: AdditionsettingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdditionsettingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
