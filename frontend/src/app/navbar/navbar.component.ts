import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

import { AuthService } from '../services/auth.service';
import { LoginComponent } from '../auth/login/login.component';
import { SignupComponent } from '../auth/signup/signup.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(
    public authService: AuthService,
    private router: Router,
    public dialog: MatDialog,
  ) {}

  openLoginModal(): void {
    this.dialog.open(LoginComponent, {
      panelClass: 'session',
    });
  }

  openSignupModal(): void {
    this.dialog.open(SignupComponent, {
      panelClass: 'session',
    });
  }

  logout(): void {
    this.authService.logoutUser();
    this.router.navigate(['/']);
  }
}
