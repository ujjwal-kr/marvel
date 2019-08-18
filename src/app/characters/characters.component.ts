import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../core/auth.service';
import { User } from '../models/user';
import { CharacterService } from '../services/character.service';
import { Group } from '../models/group';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.sass']
})

export class CharactersComponent implements OnInit, OnDestroy {
isAdmin: boolean;
user: User;
groups: Group[];
groupSub: Subscription;
userSub: Subscription;
  constructor(
    private auth: AuthService,
    private characterService: CharacterService,
  ) {
    this.userSub = this.auth.user$.subscribe(user => {
      this.user = user;
      this.isAdmin = this.auth.canWrite(this.user);
    });
  }

  ngOnInit() {
    this.groupSub = this.characterService.groups$.subscribe(groups => {
      this.groups = groups;
    });
  }

  ngOnDestroy() {
    this.groupSub.unsubscribe();
    this.userSub.unsubscribe();
  }

}
