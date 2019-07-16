import { Component, OnInit } from '@angular/core';
import {AuthService} from '../core/auth.service';
import {User} from '../models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {
user: User;
isAdmin: boolean;

  constructor(
    private auth: AuthService
  ) {
    this.auth.user$.subscribe(user => {
      this.user = user;
      if (this.auth.canWrite(user)) {
        this.isAdmin = true;
      }

      if (!this.auth.canWrite(this.user)) {
        this.isAdmin = false;
      }
    });
  }

  ngOnInit() {
  }

}
