import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersIndexComponent } from './users-index/users-index.component';
import { UsersShowComponent } from './users-show/users-show.component';
import { UsersEditComponent } from './users-edit/users-edit.component';
import { UserService } from '../services/user.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    UserService
  ],
  declarations: [
    UsersIndexComponent,
    UsersShowComponent,
    UsersEditComponent,
  ],
  exports: [
    UsersIndexComponent,
    UsersShowComponent,
    UsersEditComponent,
  ]
})
export class UsersModule { }
