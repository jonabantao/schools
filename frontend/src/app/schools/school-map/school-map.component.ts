import { PoliceEvents } from './../../models/police-events.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-school-map',
  templateUrl: './school-map.component.html',
  styleUrls: ['./school-map.component.css']
})
export class SchoolMapComponent implements OnInit {
  @Input() mapZoom: number;
  @Input() mapLat: number;
  @Input() mapLng: number;
  @Input() schools: any[];
  @Input() policeEvents: PoliceEvents[];
  @Output() boundsChanged = new EventEmitter();
  maxConstraint = 11;

  constructor() { }

  ngOnInit() {
  }

}
