import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

import { UserService } from './../../services/user.service';
import { User } from './../../models/user.model';

@Component({
  selector: 'app-manage-users-list',
  templateUrl: './manage-users-list.component.html',
  styleUrls: ['./manage-users-list.component.css']
})
export class ManageUsersListComponent {
  @Input() users: User[];
  @Input() currentUserId: number;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();

  constructor() { }
}
