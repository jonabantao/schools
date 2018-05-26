import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { environment } from '../../environments/environment';

const USER_BASE_URL = `${environment.apiHost}/api/users/`;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${USER_BASE_URL}`);
  }

  getUser(userId: number): Observable<User> {
    return this.http.get<User>(`${USER_BASE_URL}${userId}`);
  }

  deleteUser(userId: number): Observable<Object> {
    return this.http.delete(`${USER_BASE_URL}${userId}`);
  }

  updateUser(user: User): Observable<User> {
    return this.http.patch<User>(`${USER_BASE_URL}${user.id}`, user);
  }
}
