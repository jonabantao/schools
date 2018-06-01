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

  fetchSchools(category: string, lowerGrade: string, upperGrade: string): Observable<any> {
    const selectQuery = '?$select= campus_name as campusName, campus_address as campusAddress, grade_range as gradeRange, ' +
    'map_label as mapLabel, location_1';
    let categoryType = '';
    let lowerGradeQuery = '';
    let upperGradeQuery = '';

    if (category === 'public') {
      categoryType = 'like \'USD%25\' and category != \'USD Charter School\'';
    } else {
      categoryType = `= '${category}'`;
    }

    const categoryQuery = `&$where=category ${categoryType}`;

    if (lowerGrade) {
      lowerGradeQuery = ` AND lower_grade >= ${lowerGrade}`;
    }

    if (upperGrade) {
      upperGradeQuery = ` AND upper_grade <= ${upperGrade}`;
    }


    return this.http.get(`${SCHOOL_API_URL}${selectQuery}${categoryQuery}${lowerGradeQuery}${upperGradeQuery}`);
  }
}
