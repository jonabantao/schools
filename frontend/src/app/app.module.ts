import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from '@angular/cdk/layout';

import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthModule } from './auth/auth.module';
import { NavbarComponent } from './navbar/navbar.component';
import { MaterialModule } from './ng-material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { ManageUsersListComponent } from './manage-users/manage-users-list/manage-users-list.component';
import { ManageUsersEditComponent } from './manage-users/manage-users-edit/manage-users-edit.component';
import { UsersDetailComponent } from './users-detail/users-detail.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    LandingPageComponent,
    ManageUsersComponent,
    ManageUsersListComponent,
    ManageUsersEditComponent,
    UsersDetailComponent,
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
  ],
  providers: [
    UserService,
    AuthService
  ],
  entryComponents: [
    LoginComponent,
    SignupComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
