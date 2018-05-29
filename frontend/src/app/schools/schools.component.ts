import { Component, OnInit } from '@angular/core';
import { SchoolService } from '../services/school.service';

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
  policeEvents: any;

  constructor(
    private schoolService: SchoolService,
  ) { }

  ngOnInit() {
    // this.schoolService.fetchSchools()
    //   .subscribe(schools => this.schools = schools);
  }

  checkPoliceToggle(toggleState) {
    if (toggleState.checked) {
      console.log('yay');
    }
  }

  fetchPoliceActivity() {

  }

  clearPoliceActivity() {
    this.policeEvents = null;
  }

}
