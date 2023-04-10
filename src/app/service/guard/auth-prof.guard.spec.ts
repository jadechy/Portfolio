import { TestBed } from '@angular/core/testing';

import { AuthProfGuard } from './auth-prof.guard';

describe('AuthProfGuard', () => {
  let guard: AuthProfGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthProfGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
