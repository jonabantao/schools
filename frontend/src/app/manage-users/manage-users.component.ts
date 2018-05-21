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

  constructor(private userService: UserService) { }

  ngOnInit() {
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
    console.log(userToSendToServer);
  }
}
