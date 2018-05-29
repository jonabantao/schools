import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as moment from 'moment';

import { PoliceEvents } from './../models/police-events.model';

@Injectable({
  providedIn: 'root'
})
export class PoliceService {

  constructor(
    private http: HttpClient,
  ) { }

  fetchPoliceActivity(): Observable<PoliceEvents[]> {
    const dateNow = moment().format('YYYY-MM-DDTHH:mm:ss');
    const dateThreeMonthsBack = moment().subtract(2, 'months').format('YYYY-MM-DDTHH:mm:ss');
    const encodedURI = 'https://data.sfgov.org/resource/cuks-n6tp.json';
    const query = `?$query=SELECT category, descript, location \
    WHERE category NOT IN ('NON-CRIMINAL', 'OTHER OFFENSES', 'RECOVERED VEHICLE', 'WARRANTS', 'SUSPICIOUS OCC')\
    AND date BETWEEN '${dateThreeMonthsBack}' AND '${dateNow}'`;


    return this.http.get<PoliceEvents[]>(`${encodedURI}${query}`);
  }
}
