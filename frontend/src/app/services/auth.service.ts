import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { SessionForm } from './../models/session-form.model';
import { User } from './../models/user.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';

const HEADER = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
const API_USERS_URL = `${environment.apiHost}/api/users/`;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
  ) { }

  signupUser(newUser: SessionForm): Observable<User> {
    return this.http.post<User>(`${API_USERS_URL}`, newUser, HEADER);
  }

  loginUser(user: SessionForm): Observable<User> {
    return this.http.post<User>(`${API_USERS_URL}login`, user, HEADER);
  }

  logoutUser(): void {
    window.localStorage.removeItem('user');
  }

  isLoggedIn(): boolean {
    return Boolean(localStorage.getItem('user'));
  }

  storeUserInLocalStorage(user: User): void {
    window.localStorage.setItem('user', JSON.stringify(user));
  }

  retrieveUserInLocalStorage(): JSON {
    const DOMvalue = window.localStorage.getItem('user');
    return JSON.parse(DOMvalue);
  }
}
