import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-schools-search-form',
  templateUrl: './schools-search-form.component.html',
  styleUrls: ['./schools-search-form.component.css']
})
export class SchoolsSearchFormComponent implements OnInit {
  @Output() changed = new EventEmitter();

  title = 'Search Schools';

  constructor() { }

  ngOnInit() {
  }
}