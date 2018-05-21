import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, inject } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { User } from '../models/user.model';

describe('AuthService', () => {
  let service: AuthService;
  let dummyUser: User;
  let store = {};

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthService]
    });

    service = TestBed.get(AuthService);
    dummyUser = {
      id: 1,
      username: 'tester',
      firstName: 'Firstname',
      lastName: 'Lastname'
    };

    // https://stackoverflow.com/questions/11485420/how-to-mock-localstorage-in-javascript-unit-tests
    spyOn(window.localStorage, 'setItem').and.callFake((key, value) => {
      return store[key] = value;
    });

    spyOn(window.localStorage, 'getItem').and.callFake((key) => {
      return store[key];
    });
  });

  afterEach(() => {
    store = {};
  });


  describe('isLoggedIn()', () => {
    it('should return false when user is not logged in', () => {
      expect(service.isLoggedIn()).toBeFalsy();
    });

    it('should return true when user is logged in', () => {
      window.localStorage.setItem('user', JSON.stringify(dummyUser));
      expect(service.isLoggedIn()).toBeTruthy();
    });
  });

  describe('logoutUser()', () => {
    it('should remove user from local storage', () => {
      store = { user: dummyUser };

      const funcToCall = spyOn(window.localStorage, 'removeItem');
      funcToCall.and.callFake(() => {
        delete store['user'];
      });
      service.logoutUser();

      expect(store).toEqual({});
    });
  });

  describe('storeUserInLocalStorage()', () => {
    it('should store user in localStorage', () => {
      service.storeUserInLocalStorage(dummyUser);

      expect(JSON.parse(store['user'])).toEqual(dummyUser);
    });
  });

  describe('retrieveUserInLocalStorage()', () => {
    it('should return the user\'s information', () => {
      store['user'] = JSON.stringify(dummyUser);

      const returnValue = service.retrieveUserInLocalStorage();

      expect(returnValue).toEqual(dummyUser);
    });
  });
});
