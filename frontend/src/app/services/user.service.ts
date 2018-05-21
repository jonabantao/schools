import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

const USER_BASE_URL = '/api/users/';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${USER_BASE_URL}`);
  }

  deleteUser(userId: number): Observable<Object> {
    return this.http.delete(`${USER_BASE_URL}${userId}`);
  }
}
