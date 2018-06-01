import { PoliceEvents } from './../../models/police-events.model';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-school-map',
  templateUrl: './school-map.component.html',
  styleUrls: ['./school-map.component.css']
})
export class SchoolMapComponent {
  @Input() mapZoom: number;
  @Input() mapLat: number;
  @Input() mapLng: number;
  @Input() schools: any[];
  @Input() policeEvents: PoliceEvents[];
  @Output() boundsChanged = new EventEmitter();
  @Output() focused = new EventEmitter();
  @Output() zoomChanged = new EventEmitter();
  @Output() centerChanged = new EventEmitter();
  maxConstraint = 12;

  constructor() {}

}
