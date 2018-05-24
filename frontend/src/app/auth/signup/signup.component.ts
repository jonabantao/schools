import { User } from './../../models/user.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  sessionForm: FormGroup;
  usernameControl: FormControl;
  firstNameControl: FormControl;
  lastNameControl: FormControl;
  emailControl: FormControl;
  passwordControl: FormControl;
  hide: boolean;

  constructor(
    private router: Router,
    private authService: AuthService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.hide = true;
    this.usernameControl = this.formBuilder.control('', [Validators.required]);
    this.firstNameControl = this.formBuilder.control('', Validators.required);
    this.lastNameControl = this.formBuilder.control('', Validators.required);
    this.emailControl = this.formBuilder.control('', [Validators.required, Validators.email]);
    this.passwordControl = this.formBuilder.control('', [Validators.required, Validators.minLength(6)]);

    this.sessionForm = this.formBuilder.group({
      username: this.usernameControl,
      firstName: this.firstNameControl,
      lastName: this.lastNameControl,
      email: this.emailControl,
      password: this.passwordControl,
    });
  }

  getFieldErrorMessage(field) {
    return this[field].hasError('required') ? 'Field cannot be blank' : '';
  }

  getEmailErrorMessage() {
    return this.emailControl.hasError('required') ? 'You must enter an email' :
      this.emailControl.hasError('email') ? 'You must enter a valid email' : '';
  }

  getPasswordErrorMessage() {
    return this.passwordControl.hasError('required') ? 'Password cannot be blank' :
      this.passwordControl.hasError('minlength') ? 'Password must be greater than 6 characters' :
        '';
  }

  signup(form: FormGroup) {
    this.authService.signupUser(form.value)
      .subscribe((user: User) => {
        this.authService.storeUserInLocalStorage(user);
        this.router.navigate(['/dashboard']);
      });
  }

}
