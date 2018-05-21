import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageUsersComponent } from './manage-users.component';
import { ManageUsersEditComponent } from './manage-users-edit/manage-users-edit.component';
import { ManageUsersListComponent } from './manage-users-list/manage-users-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../ng-material/material.module';

describe('ManageUsersComponent', () => {
  let component: ManageUsersComponent;
  let fixture: ComponentFixture<ManageUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ManageUsersComponent,
        ManageUsersEditComponent,
        ManageUsersListComponent,
      ],
      imports: [
        ReactiveFormsModule,
        MaterialModule,
        RouterTestingModule,
        HttpClientTestingModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
