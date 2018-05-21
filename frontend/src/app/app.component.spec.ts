import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { ManageUsersEditComponent } from './manage-users/manage-users-edit/manage-users-edit.component';
import { ManageUsersListComponent } from './manage-users/manage-users-list/manage-users-list.component';
import { UsersDetailComponent } from './users-detail/users-detail.component';
import { AuthModule } from './auth/auth.module';
import { MaterialModule } from './ng-material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        DashboardComponent,
        NavbarComponent,
        LandingPageComponent,
        ManageUsersComponent,
        ManageUsersEditComponent,
        ManageUsersListComponent,
        UsersDetailComponent,
      ],
      imports: [
        AuthModule,
        RouterTestingModule,
        MaterialModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
