import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from '@angular/cdk/layout';
import { AgmCoreModule } from '@agm/core';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';

import { AuthService } from './services/auth.service';
import { SchoolService } from './services/school.service';
import { UserService } from './services/user.service';
import { PoliceService } from './services/police.service';

import { AuthModule } from './auth/auth.module';
import { MaterialModule } from './ng-material/material.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SchoolsComponent } from './schools/schools.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { ManageUsersListComponent } from './manage-users/manage-users-list/manage-users-list.component';
import { ManageUsersEditComponent } from './manage-users/manage-users-edit/manage-users-edit.component';
import { UsersDetailComponent } from './users-detail/users-detail.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SchoolsSearchFormComponent } from './schools/schools-search-form/schools-search-form.component';
import { SchoolMapComponent } from './schools/school-map/school-map.component';
import { SchoolOptionComponent } from './schools/school-option/school-option.component';

@NgModule({
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
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    AuthModule,
    LayoutModule,
    MaterialModule,
    AgmCoreModule.forRoot({ apiKey: 'AIzaSyAuojjGFZ0vU0wYm067YgpNwyNbtcp6PHg' }),
    AgmSnazzyInfoWindowModule,
  ],
  providers: [
    UserService,
    AuthService,
    SchoolService,
    PoliceService,
  ],
  entryComponents: [
    LoginComponent,
    SignupComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
