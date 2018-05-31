import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolsComponent } from './schools.component';
import { MaterialModule } from '../ng-material/material.module';
import { SchoolsSearchFormComponent } from './schools-search-form/schools-search-form.component';
import { SchoolMapComponent } from './school-map/school-map.component';
import { SchoolOptionComponent } from './school-option/school-option.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('SchoolsComponent', () => {
  let component: SchoolsComponent;
  let fixture: ComponentFixture<SchoolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SchoolsComponent,
        SchoolsSearchFormComponent,
        SchoolMapComponent,
        SchoolOptionComponent,
      ],
      imports: [
        MaterialModule,
        ReactiveFormsModule,
        AgmCoreModule.forRoot(),
        AgmSnazzyInfoWindowModule,
        HttpClientTestingModule,
        BrowserAnimationsModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
