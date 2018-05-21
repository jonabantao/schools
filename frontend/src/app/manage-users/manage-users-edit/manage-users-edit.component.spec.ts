import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageUsersEditComponent } from './manage-users-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../ng-material/material.module';

describe('ManageUsersEditComponent', () => {
  let component: ManageUsersEditComponent;
  let fixture: ComponentFixture<ManageUsersEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageUsersEditComponent ],
      imports: [
        ReactiveFormsModule,
        MaterialModule,
        BrowserAnimationsModule,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageUsersEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
