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
    this.userService.getUsers()
      .subscribe((users: User[]) => this.users = users);
  }

  selectUser(user: User): void {
    this.selectedUser = user;
  }

  deleteUser(user: User): void {
  }
}
