import { Component, OnInit } from '@angular/core';
import { SchoolService } from '../services/school.service';
import { PoliceService } from '../services/police.service';
import { PoliceEvents } from '../models/police-events.model';

@Component({
  selector: 'app-schools',
  templateUrl: './schools.component.html',
  styleUrls: ['./schools.component.css']
})
export class SchoolsComponent implements OnInit {
  zoom = 12.4;
  lat = 37.773972;
  lng = -122.451297;
  hasBegunSearch = false;
  NWPointLng: number;
  SEPointLng: number;
  NWPointLat: number;
  SEPointLat: number;
  schools: any;
  policeEvents: PoliceEvents[];

  constructor(
    private schoolService: SchoolService,
    private policeService: PoliceService,
  ) { }

  ngOnInit() {
    this.schoolService.fetchSchools()
      .subscribe(schools => {
        this.showMarkerOptions();
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

  showMarkerOptions(): void {
    this.hasBegunSearch = true;
  }

  test(event): void {
    this.NWPointLng = event.b.b;
    this.SEPointLng = event.b.f;
    this.NWPointLat = event.f.f;
    this.SEPointLat = event.f.b;
    console.log(event);
  }

}
