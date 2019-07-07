import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service';
import { User } from '../models/user';
import { Character } from '../models/character';
import { CharacterService } from '../services/character.service';
import { Group } from '../models/group';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.sass']
})

export class CharactersComponent implements OnInit {
isAdmin: boolean;
user: User;
groups: Group;
  constructor(
    private auth: AuthService,
    private characterService: CharacterService
  ) {
    this.auth.user$.subscribe(user => {
      this.user = user;
      this.isAdmin = this.auth.canWrite(this.user);
    });

    this.characterService.groups$.subscribe(data => {
      console.log(data);
    });
  }

  ngOnInit() {
    this.getThor().subscribe(data => {console.log(data)});
  }

  getThor() {
    return this.characterService.getCharacters('hlmMCeN3nioEEAHDeYmj');
  }

}
