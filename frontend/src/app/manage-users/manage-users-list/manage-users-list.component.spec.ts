import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageUsersListComponent } from './manage-users-list.component';
import { MaterialModule } from '../../ng-material/material.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('ManageUsersListComponent', () => {
  let component: ManageUsersListComponent;
  let fixture: ComponentFixture<ManageUsersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageUsersListComponent ],
      imports: [
        MaterialModule,
        RouterTestingModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageUsersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
