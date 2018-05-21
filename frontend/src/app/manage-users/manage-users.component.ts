import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';

import { User } from './../models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css']
})
export class ManageUsersComponent implements OnInit {
  users: User[];
  selectedUser: User;
  currentUser: any;
  currentUserId: number;

  constructor(
    private userService: UserService,
    private authService: AuthService,
  ) { }

  ngOnInit() {
    this.currentUser = this.authService.retrieveUserInLocalStorage();
    this.currentUserId = this.currentUser.id;
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers()
      .subscribe((users: User[]) => this.users = users);
  }

  selectUser(user: User): void {
    this.selectedUser = user;
  }

  deleteUser(userId: number): void {
    this.userService.deleteUser(userId)
      .subscribe(() => {
        this.getUsers();
      });
  }

  updateUser(user: User): void {
    const userToSendToServer = Object.assign({}, this.selectedUser, user);

    this.userService.updateUser(userToSendToServer)
      .subscribe(() => {
        this.clearSelectedUser();
        this.getUsers();
      });
  }

  clearSelectedUser(): void {
    this.selectedUser = null;
  }
}
