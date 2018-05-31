import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-schools-search-form',
  templateUrl: './schools-search-form.component.html',
  styleUrls: ['./schools-search-form.component.css']
})
export class SchoolsSearchFormComponent implements OnInit {
  title = 'Search Schools';
  lowerGrade: number;
  upperGrade: number;

  constructor() { }

  ngOnInit() {
  }
}
