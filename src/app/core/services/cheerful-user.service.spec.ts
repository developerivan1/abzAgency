import { TestBed } from '@angular/core/testing';

import { CheerfulUserService } from './cheerful-user.service';

describe('CheerfulUserService', () => {
  let service: CheerfulUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheerfulUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
