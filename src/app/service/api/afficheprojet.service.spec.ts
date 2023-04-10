import { TestBed } from '@angular/core/testing';

import { AfficheprojetService } from './afficheprojet.service';

describe('AfficheprojetService', () => {
  let service: AfficheprojetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AfficheprojetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
