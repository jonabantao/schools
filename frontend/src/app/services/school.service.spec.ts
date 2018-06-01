import { TestBed, inject } from '@angular/core/testing';

import { SchoolService } from './school.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('SchoolService', () => {
  let service: any;
  let httpMock: HttpTestingController;
  let dummyResponse: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SchoolService],
      imports: [ HttpClientTestingModule ]
    }).compileComponents();

    service = TestBed.get(SchoolService);
    httpMock = TestBed.get(HttpTestingController);

    dummyResponse = [
      {
        campusName: 'test campus',
        campusAddress: 'test address',
        location_1: {
          type: 'Point',
          coordinates: [1, 1],
        }
      }
    ];
  });

  it('should be created', inject([SchoolService], (checkService: SchoolService) => {
    expect(checkService).toBeTruthy();
  }));

  describe('fetchSchools()', () => {
    it('should construct the proper query', () => {
      const mockQuery = 'https://data.sfgov.org/resource/mmsr-vumy.json?$select= ' +
      'campus_name as campusName, campus_address as campusAddress, location_1' +
      '&$where=category = \'USD Charter School\' AND lower_grade >= -2';

      service.fetchSchools('USD Charter School', '-2')
        .subscribe();

      const mock = httpMock.expectOne(mockQuery);
      expect(mock.request.method).toBe('GET');
    });
  });
});
