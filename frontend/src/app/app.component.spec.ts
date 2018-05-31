import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SchoolsComponent } from './schools/schools.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { ManageUsersEditComponent } from './manage-users/manage-users-edit/manage-users-edit.component';
import { ManageUsersListComponent } from './manage-users/manage-users-list/manage-users-list.component';
import { UsersDetailComponent } from './users-detail/users-detail.component';
import { AuthModule } from './auth/auth.module';
import { MaterialModule } from './ng-material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SchoolsSearchFormComponent } from './schools/schools-search-form/schools-search-form.component';
import { SchoolMapComponent } from './schools/school-map/school-map.component';
import { SchoolOptionComponent } from './schools/school-option/school-option.component';
import { AgmCoreModule } from '@agm/core';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';
import { AppRoutingModule } from './app-routing.module';
import { APP_BASE_HREF } from '@angular/common';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        SchoolsComponent,
        NavbarComponent,
        LandingPageComponent,
        ManageUsersComponent,
        ManageUsersListComponent,
        ManageUsersEditComponent,
        UsersDetailComponent,
        SchoolsSearchFormComponent,
        SchoolMapComponent,
        SchoolOptionComponent,
      ],
      imports: [
        ReactiveFormsModule,
        AppRoutingModule,
        AuthModule,
        MaterialModule,
        AgmCoreModule.forRoot(),
        AgmSnazzyInfoWindowModule,
        HttpClientTestingModule,
      ],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
