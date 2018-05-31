import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-schools-search-form',
  templateUrl: './schools-search-form.component.html',
  styleUrls: ['./schools-search-form.component.css']
})
export class SchoolsSearchFormComponent {
  title = 'Search Schools';
  lowerGrade: string;
  upperGrade: string;
  schoolForm: FormGroup;

  @Output() formSubmitted = new EventEmitter();

  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.schoolForm = this.formBuilder.group({
      schoolCategory: 'public',
      lowerGrade: '',
      upperGrade: '',
    });
  }
}
