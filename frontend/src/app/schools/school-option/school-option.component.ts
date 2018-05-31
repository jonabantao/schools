import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-school-option',
  templateUrl: './school-option.component.html',
  styleUrls: ['./school-option.component.css']
})
export class SchoolOptionComponent implements OnInit {
  title = 'Marker Options';

  @Input() isVisible: boolean;
  @Output() changed = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
