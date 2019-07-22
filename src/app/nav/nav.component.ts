import { Component, OnInit } from '@angular/core';
import {AuthService} from '../core/auth.service';
import {User} from '../models/user';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.sass']
})
export class NavComponent implements OnInit {
user;
  constructor(
    private auth: AuthService
  ) {
    this.auth.user$.subscribe(user => {
      this.user = user;
    });
  }

  ngOnInit() {
  }

}
