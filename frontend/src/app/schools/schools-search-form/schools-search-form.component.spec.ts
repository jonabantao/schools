import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolsSearchFormComponent } from './schools-search-form.component';
import { MaterialModule } from '../../ng-material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('SchoolsSearchFormComponent', () => {
  let component: SchoolsSearchFormComponent;
  let fixture: ComponentFixture<SchoolsSearchFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolsSearchFormComponent ],
      imports: [
        MaterialModule,
        ReactiveFormsModule,
        BrowserAnimationsModule
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolsSearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
