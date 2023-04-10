import { TestBed } from '@angular/core/testing';

import { SingleportfolioService } from './singleportfolio.service';

describe('SingleportfolioService', () => {
  let service: SingleportfolioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SingleportfolioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
