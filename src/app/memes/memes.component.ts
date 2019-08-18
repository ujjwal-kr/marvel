import { Component, OnInit } from '@angular/core';
import { MemeService } from '../services/meme.service';
import { AuthService } from '../core/auth.service';
import { User } from '../models/user';

@Component({
  selector: 'app-memes',
  templateUrl: './memes.component.html',
  styleUrls: ['./memes.component.sass']
})
export class MemesComponent implements OnInit {
memes: any;
isAdmin: boolean;
user: User;
  constructor(
    private memeService: MemeService,
    private authService: AuthService
  ) {
    this.authService.user$.subscribe(user => {
      this.user = user;
      this.isAdmin = this.authService.canWrite(this.user);
    });
  }

  ngOnInit() {
    this.memeService.getMemes().subscribe(memes => {
      this.memes = memes.reverse();
    });
  }

}
