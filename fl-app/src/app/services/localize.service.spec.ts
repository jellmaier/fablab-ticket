import { TestBed, inject } from '@angular/core/testing';

import { LocalizeService } from './localize.service';

describe('LocalizeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocalizeService]
    });
  });

  it('should be created', inject([LocalizeService], (service: LocalizeService) => {
    expect(service).toBeTruthy();
  }));
});
