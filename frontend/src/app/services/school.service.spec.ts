import { TestBed, inject } from '@angular/core/testing';

import { SchoolService } from './school.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SchoolService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SchoolService],
      imports: [ HttpClientTestingModule ],
    });
  });

  it('should be created', inject([SchoolService], (service: SchoolService) => {
    expect(service).toBeTruthy();
  }));
});
