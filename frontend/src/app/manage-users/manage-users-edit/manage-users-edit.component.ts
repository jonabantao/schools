import { User } from './../../models/user.model';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-manage-users-edit',
  templateUrl: './manage-users-edit.component.html',
  styleUrls: ['./manage-users-edit.component.css']
})
export class ManageUsersEditComponent implements OnInit {
  firstAndLastName: string;
  selectedUser: User;
  @Output() saved = new EventEmitter();
  @Input() set user(value: User) {
    if (value) {
      this.firstAndLastName = `${value.firstName} ${value.lastName}`;
    }

    this.selectedUser = Object.assign({}, value);
  }

  constructor() { }

  ngOnInit() {
  }

}
