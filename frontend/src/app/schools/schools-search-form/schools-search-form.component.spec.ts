import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolsSearchFormComponent } from './schools-search-form.component';

describe('SchoolsSearchFormComponent', () => {
  let component: SchoolsSearchFormComponent;
  let fixture: ComponentFixture<SchoolsSearchFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolsSearchFormComponent ]
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
