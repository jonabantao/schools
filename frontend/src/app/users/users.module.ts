import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersIndexComponent } from './users-index/users-index.component';
import { UsersShowComponent } from './users-show/users-show.component';
import { UsersEditComponent } from './users-edit/users-edit.component';
import { UsersSignupComponent } from './users-signup/users-signup.component';
import { UsersLoginComponent } from './users-login/users-login.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    UsersIndexComponent,
    UsersShowComponent,
    UsersEditComponent,
    UsersSignupComponent,
    UsersLoginComponent
  ],
  exports: [
    UsersIndexComponent,
    UsersShowComponent,
    UsersEditComponent,
    UsersSignupComponent,
    UsersLoginComponent
  ]
})
export class UsersModule { }
