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

  const USER_BASE_URL = '/api/users/';

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService]
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

  describe('getUsers()', () => {
    it('should have to an endpoint for method and return array of users', () => {
      service.getUsers()
        .subscribe(res => {
          expect(res).toEqual(dummyUsers);
          expect(res.length).toEqual(1);
        });

      const mock = httpMock.expectOne(USER_BASE_URL);
      expect(mock.request.method).toBe('GET');

      mock.flush(dummyUsers);
      httpMock.verify();
    });
  });

  describe('getUser()', () => {
    it('should have to an endpoint for method and return user', () => {
      service.getUser(dummyUserId)
        .subscribe(res => {
          expect(res).toEqual(dummyUser);
        });

      const mock = httpMock.expectOne(`${USER_BASE_URL}${dummyUserId}`);
      expect(mock.request.method).toBe('GET');

      mock.flush(dummyUser);
      httpMock.verify();
    });
  });

  describe('deleteUser()', () => {
    it('should have to an endpoint for method', () => {
      service.deleteUser(dummyUserId)
        .subscribe(res => {
          expect(res).toEqual('OK');
        });

      const mock = httpMock.expectOne(`${USER_BASE_URL}${dummyUserId}`);
      expect(mock.request.method).toBe('DELETE');

      mock.flush('OK');
      httpMock.verify();
    });
  });

  describe('updateUser()', () => {
    it('should have to an endpoint for method and return updated user', () => {
      const updatedUser = {
        id: 1,
        username: 'tester',
        firstName: 'firstupdate',
        lastName: 'lastname',
      };

      service.updateUser(updatedUser)
        .subscribe(res => {
          expect(res).toEqual(updatedUser);
        });

      const mock = httpMock.expectOne(`${USER_BASE_URL}${updatedUser.id}`);
      expect(mock.request.method).toBe('PATCH');

      mock.flush(updatedUser);
      httpMock.verify();
    });
  });
});
