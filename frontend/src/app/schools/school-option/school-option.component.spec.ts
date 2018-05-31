import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolOptionComponent } from './school-option.component';
import { MaterialModule } from '../../ng-material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('SchoolOptionComponent', () => {
  let component: SchoolOptionComponent;
  let fixture: ComponentFixture<SchoolOptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolOptionComponent ],
      imports: [
        BrowserAnimationsModule,
        MaterialModule
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
