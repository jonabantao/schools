import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { User } from './../../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  sessionForm: FormGroup;
  hide: boolean;
  errors: string[];

  constructor(
    private router: Router,
    private authService: AuthService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.hide = true;

    this.sessionForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login(form: FormGroup): void {
    this.authService.loginUser(form.value)
      .subscribe((user: User) => {
        this.authService.storeUserInLocalStorage(user);
        this.clearErrors();
        this.router.navigate(['/dashboard']);
      },
      ({ error }) => {
        this.handleErrors(error.message);
        this.resetForm();
      }
    );
  }

  handleErrors(message): void {
    this.errors = [message];
  }

  clearErrors(): void {
    this.errors = [];
  }

  resetForm(): void {
    this.sessionForm.reset();
  }

}
