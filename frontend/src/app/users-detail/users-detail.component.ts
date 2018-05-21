import { User } from './../models/user.model';
import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-users-detail',
  templateUrl: './users-detail.component.html',
  styleUrls: ['./users-detail.component.css']
})
export class UsersDetailComponent implements OnInit {
  user: User;

  constructor(
    private usersService: UserService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.paramMap
      .subscribe((paramMap: ParamMap) => {
        const userId = parseInt(paramMap.get('userId'), 10);

        this.usersService.getUser(userId)
          .subscribe(user => this.user = user);
      });
  }
}
