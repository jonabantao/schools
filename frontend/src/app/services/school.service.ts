import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const SCHOOL_API_URL = 'https://data.sfgov.org/resource/mmsr-vumy.json';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  constructor(
    private http: HttpClient,
  ) { }

  fetchSchools(): Observable<any> {
    return this.http.get(SCHOOL_API_URL);
  }
}
