import { TestBed, inject, async } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { UserService } from './user.service';
import { User } from '../models/user.model';

describe('UserService', () => {
  let service: UserService;
  let httpMock: HttpTestingController;
  let dummyUserId: number;
  let dummyUser: User;
  let dummyUsers: User[];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        UserService
      ]
    })
      .compileComponents();

    service = TestBed.get(UserService);
    httpMock = TestBed.get(HttpTestingController);

    dummyUserId = 1;
    dummyUser = {
      id: 1,
      username: 'tester',
      firstName: 'firstname',
      lastName: 'lastname',
    };
    dummyUsers = [dummyUser];
  }));

  describe('getUsers', () => {
    it('should return successfully', () => {
      service.getUsers()
        .subscribe(res => {
          expect(res).toEqual(dummyUsers);
          expect(res.length).toEqual(1);
        });

      const mock = httpMock.expectOne('/api/users');
      expect(mock.request.method).toBe('GET');

      mock.flush(dummyUsers);
      httpMock.verify();
    });
  });
});
