import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  constructor(
    private http: HttpClient,
  ) { }

  fetchSchools(): Observable<any> {
    return this.http.get('https://data.sfgov.org/resource/mmsr-vumy.json');
  }
}
