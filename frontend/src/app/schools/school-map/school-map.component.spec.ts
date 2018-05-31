import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolMapComponent } from './school-map.component';
import { AgmCoreModule } from '@agm/core';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';
import { MaterialModule } from '../../ng-material/material.module';

describe('SchoolMapComponent', () => {
  let component: SchoolMapComponent;
  let fixture: ComponentFixture<SchoolMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolMapComponent ],
      imports: [
        AgmCoreModule.forRoot(),
        AgmSnazzyInfoWindowModule,
        MaterialModule,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
