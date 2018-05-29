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
  defaultZoom = 12.4;
  defaultLat = 37.773972;
  defaultLng = -122.451297;
  maxConstraint = 11;
  schools: any;
  policeEvents: PoliceEvents[];

  constructor(
    private schoolService: SchoolService,
    private policeService: PoliceService,
  ) { }

  ngOnInit() {
    this.schoolService.fetchSchools()
      .subscribe(schools => this.schools = schools);
  }

  checkPoliceToggle(toggleState) {
    if (toggleState.checked) {
      return this.getPoliceActivity();
    }

    return this.clearPoliceActivity();
  }

  getPoliceActivity(): void {
    this.policeService.fetchPoliceActivity()
      .subscribe((policeEvents: PoliceEvents[]) => this.policeEvents = policeEvents);
  }

  clearPoliceActivity(): void {
    this.policeEvents = null;
  }

}
