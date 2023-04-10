import { TestBed } from '@angular/core/testing';

import { AllportfolioService } from './allportfolio.service';

describe('AllportfolioService', () => {
  let service: AllportfolioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllportfolioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
