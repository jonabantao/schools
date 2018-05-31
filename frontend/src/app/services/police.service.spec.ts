import { TestBed, inject } from '@angular/core/testing';

import { PoliceService } from './police.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PoliceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PoliceService],
      imports: [
        HttpClientTestingModule,
      ]
    });
  });

  it('should be created', inject([PoliceService], (service: PoliceService) => {
    expect(service).toBeTruthy();
  }));
});
