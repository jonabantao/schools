import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SignupComponent, LoginComponent]
})
export class AuthModule { }
