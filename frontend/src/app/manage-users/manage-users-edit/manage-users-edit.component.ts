import { User } from './../../models/user.model';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-manage-users-edit',
  templateUrl: './manage-users-edit.component.html',
  styleUrls: ['./manage-users-edit.component.css']
})
export class ManageUsersEditComponent implements OnInit {
  firstAndLastName: string;
  selectedUser: User;
  userForm: FormGroup;

  @Output() saved = new EventEmitter();
  @Input() set user(value: User) {
    if (value) {
      this.firstAndLastName = `${value.firstName} ${value.lastName}`;
    }

    this.selectedUser = Object.assign({}, value);

    this.userForm = this.formBuilder.group({
      firstName: [this.selectedUser.firstName, Validators.required],
      lastName: [this.selectedUser.lastName, Validators.required],
    });
  }

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
  }

  isNotEmpty(user: User): boolean {
    return user && Object.keys(user).length > 0;
  }

}
