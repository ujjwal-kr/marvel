import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CharacterService } from '../../services/character.service';
import { Character } from '../../models/character';
import { Subscription } from 'rxjs/internal/Subscription';
import { User } from '../../models/user';
import { AuthService } from '../../core/auth.service';
import { Group } from '../../models/group';

@Component({
  selector: 'app-group-details',
  templateUrl: './group-details.component.html',
  styleUrls: ['./group-details.component.sass']
})

export class GroupDetailsComponent implements OnInit, OnDestroy {
  characters: Character[];
  groupId: string;
  user: User;
  isAdmin: boolean;
  group: Group;

  CharactersSub: Subscription;
  userSub: Subscription;
  groupSub: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private characterService: CharacterService
  ) {
    this.userSub = this.authService.user$.subscribe(user => {
      this.user = user;
      this.isAdmin = this.authService.canWrite(this.user);
    });

    this.activatedRoute.params.subscribe(params => {
      this.groupId = params.id;
      this.groupSub = this.characterService.getGroup(this.groupId).subscribe(group => {
        this.group = group;
        console.log(this.group);
      });
      this.CharactersSub = this.characterService.getCharacters(this.groupId).subscribe(characters => {
        this.characters = characters;
        console.log(this.characters);
      });
    });
  }

  ngOnInit() {
  }

  characterDetails(id: string) {
    this.router.navigateByUrl('/characters/' + id);
  }

  ngOnDestroy() {
    this.CharactersSub.unsubscribe();
    this.userSub.unsubscribe();
    this.groupSub.unsubscribe();
  }

}
