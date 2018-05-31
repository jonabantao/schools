import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as moment from 'moment';

import { PoliceEvents } from './../models/police-events.model';

const POLICE_API_URL = 'https://data.sfgov.org/resource/cuks-n6tp.json';

@Injectable({
  providedIn: 'root'
})
export class PoliceService {
  categories = [
    'ASSAULT',
    'MISSING PERSONS',
    'ROBBERY',
    'KIDNAPPING',
    'SEX OFFENSES, FORCIBLE',
    'SEX OFFENSES, NON FORCIBLE',
    'PROSTITUTION',
  ];

  constructor(
    private http: HttpClient,
  ) { }

  fetchPoliceActivity(
    NWPointLat: number,
    NWPointLng: number,
    SEPointLat: number,
    SEPointLng: number,
  ): Observable<PoliceEvents[]> {
    const dateNow = moment().format('YYYY-MM-DDTHH:mm:ss');
    const dateThreeMonthsBack = moment().subtract(2, 'months').format('YYYY-MM-DDTHH:mm:ss');
    const querySelect = '?$select=category, descript, location';
    const queryBounds = `within_box(location, ${NWPointLat}, ${NWPointLng}, ${SEPointLat}, ${SEPointLng})`;
    const queryCategories = `category in (${this.categories.map(category => `'${category}'`)})`;
    const queryDates = `date between '${dateThreeMonthsBack}' AND '${dateNow}'`;

    const queryURI = `${POLICE_API_URL}${querySelect}&$where=${queryBounds} AND ${queryCategories} AND ${queryDates}`;

    return this.http.get<PoliceEvents[]>(queryURI);
  }
}
