import { Component, OnInit } from '@angular/core';
import { SchoolService } from '../services/school.service';
import { PoliceService } from '../services/police.service';
import { PoliceEvents } from '../models/police-events.model';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { ClassGetter } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-schools',
  templateUrl: './schools.component.html',
  styleUrls: ['./schools.component.css']
})
export class SchoolsComponent implements OnInit {
  zoom = 12;
  lat = 37.773972;
  lng = -122.451297;
  hasBegunSearch = false;
  NWPointLng: number;
  SEPointLng: number;
  NWPointLat: number;
  SEPointLat: number;
  schools: any;
  policeEvents: PoliceEvents[];
  zoomSubject = new Subject();
  centerSubject = new Subject();
  boundSubject = new Subject();

  constructor(
    private schoolService: SchoolService,
    private policeService: PoliceService,
  ) { }

  ngOnInit() {
    this.zoomSubject.pipe(
      debounceTime(2000),
      distinctUntilChanged()
    ).subscribe((zoomLvl: number) => this.zoom = zoomLvl);

    this.centerSubject.pipe(
      debounceTime(500),
      distinctUntilChanged()
    ).subscribe(({ lat, lng }) => {
      this.lat = lat;
      this.lng = lng;
     });

    this.boundSubject.pipe(
      debounceTime(500),
      distinctUntilChanged()
    ).subscribe((event: any) => {
      this.NWPointLng = event.b.b;
      this.SEPointLng = event.b.f;
      this.NWPointLat = event.f.f;
      this.SEPointLat = event.f.b;
    });
  }

  searchSchools({ schoolCategory, lowerGrade, upperGrade }): void {
    this.schoolService.fetchSchools(schoolCategory, lowerGrade, upperGrade)
      .subscribe(schools => {
        this.schools = schools;
      });
  }

  checkPoliceToggle(toggleState): void {
    if (toggleState.checked) {
      return this.getPoliceActivity();
    }

    return this.clearPoliceActivity();
  }

  getPoliceActivity(): void {
    this.policeService.fetchPoliceActivity(
      this.NWPointLat,
      this.NWPointLng,
      this.SEPointLat,
      this.SEPointLng,
    )
      .subscribe((policeEvents: PoliceEvents[]) => this.policeEvents = policeEvents);
  }

  clearPoliceActivity(): void {
    this.policeEvents = null;
  }

  storeMapBounds(event): void {
    this.boundSubject.next(event);
  }

  setLat(lat: number): void {
    this.lat = lat;
  }

  setLng(lng: number): void {
    this.lng = lng;
  }

  setZoom(zoom: number): void {
    this.zoomSubject.next(zoom);
  }

  setCenter(coords: any): void {
    this.centerSubject.next(coords);
  }

  zoomIn(): void {
    this.zoom = 16;
  }

  focusOnSchool({ lat, lng }): void {
    this.setLat(lat);
    this.setLng(lng);
    this.zoomIn();
  }
}
