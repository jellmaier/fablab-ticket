import { TestBed, inject } from '@angular/core/testing';

import { IsLoggedInGuard } from './login-guard.service';
import { AppApiService } from '../app-api.service';

describe('LoginGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IsLoggedInGuard, AppApiService]
    });
  });

  it('should be created', inject([IsLoggedInGuard], (service: IsLoggedInGuard) => {
    expect(service).toBeTruthy();
  }));
});
