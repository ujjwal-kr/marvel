import { Component, OnInit } from '@angular/core';
import {MemeService} from '../services/meme.service';
import {AuthService} from '../core/auth.service';

@Component({
  selector: 'app-memes',
  templateUrl: './memes.component.html',
  styleUrls: ['./memes.component.sass']
})
export class MemesComponent implements OnInit {
memes: any;
mock: any;
isAdmin: boolean;
  constructor(
    private memeService: MemeService,
    private authService: AuthService
  ) {
    this.memes = [];
    this.mock = [];
  }

  ngOnInit() {
    this.memeService.getMemes().subscribe(memes => {
      memes.forEach(doc => {
        this.mock.push(doc.data());
      });
      this.memes = this.mock.reverse();
    });
  }

}
