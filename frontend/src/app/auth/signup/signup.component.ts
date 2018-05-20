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
  hide: boolean;

  constructor(
    private router: Router,
    private authService: AuthService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.hide = true;

    this.sessionForm = this.formBuilder.group({
      username: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      password: [
        '',
        [Validators.required, Validators.minLength(6)]
      ],
    });
  }

  signup(form: FormGroup) {
    this.authService.signupUser(form.value)
      .subscribe((user: User) => {
        this.authService.storeUserInLocalStorage(user);
        this.router.navigate(['/dashboard']);
      });
  }

}
