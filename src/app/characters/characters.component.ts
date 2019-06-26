import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service';
import { User } from '../models/user';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.sass']
})
export class CharactersComponent implements OnInit {
isAdmin: boolean;
user: User;
  constructor(
    private auth: AuthService
  ) {
    this.auth.user$.subscribe(user => {
      this.user = user;
      this.isAdmin = this.auth.canWrite(this.user);
    });
  }

  ngOnInit() {
  }

}
