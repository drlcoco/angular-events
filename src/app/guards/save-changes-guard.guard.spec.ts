import { TestBed } from '@angular/core/testing';

import { SaveChangesGuardGuard } from './save-changes-guard.guard';

describe('SaveChangesGuardGuard', () => {
  let guard: SaveChangesGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SaveChangesGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
