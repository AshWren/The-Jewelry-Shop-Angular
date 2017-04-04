import { TestBed, inject } from '@angular/core/testing';

import { BraceletService } from './bracelet.service';

describe('BraceletService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BraceletService]
    });
  });

  it('should ...', inject([BraceletService], (service: BraceletService) => {
    expect(service).toBeTruthy();
  }));
});
