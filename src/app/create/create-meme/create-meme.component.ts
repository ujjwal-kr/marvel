import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import * as firebase from 'firebase';

import { Meme } from 'src/app/models/meme';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/core/auth.service';
import { MemeService } from 'src/app/services/meme.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-meme',
  templateUrl: './create-meme.component.html',
  styleUrls: ['./create-meme.component.sass']
})
export class CreateMemeComponent implements OnInit, OnDestroy {
createMemeForm: FormGroup;
meme: Meme;
user: User;

userSub: Subscription;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private memeService: MemeService,
    private router: Router
  ) {
    this.userSub = this.authService.user$.subscribe(user => {
      this.user = user;
    });
  }

  ngOnInit() {
    this.createMemeForm = this.formBuilder.group({
      url: ['', [
        Validators.required,
        Validators.maxLength(200),
        Validators.minLength(3)
      ]]
    });
  }

  get url() {
    return this.createMemeForm.get('url').value;
  }

  postMeme() {
    this.meme = {
      uid: this.user.uid,
      url: this.url,
      date: firebase.firestore.FieldValue.serverTimestamp()
    };
    this.memeService.addMemes(this.meme);
    this.router.navigateByUrl('/memes');
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

}
