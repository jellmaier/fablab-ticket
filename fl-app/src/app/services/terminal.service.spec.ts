import { TestBed, inject } from '@angular/core/testing';

import { TerminalService } from './terminal.service';

describe('TerminalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TerminalService]
    });
  });

  it('should be created', inject([TerminalService], (service: TerminalService) => {
    expect(service).toBeTruthy();
  }));
});
