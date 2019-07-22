import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../core/auth.service';
import { User } from '../../models/user';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { CharacterService } from '../../services/character.service';
import { Character } from '../../models/character';

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.sass']
})
export class CreateCharacterComponent implements OnInit {

  user: User;
  createCharacterForm: FormGroup;
  character: Character;
  groupId: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private auth: AuthService,
    private formBuilder: FormBuilder,
    private characterService: CharacterService
  ) {
    this.auth.user$.subscribe(user => {
      if (!user) {
       return this.router.navigateByUrl('/');
      } else {
        this.user = user;
        if (!this.auth.canWrite(this.user)) {
          return this.router.navigateByUrl('/');
        } else {
          this.route.params.subscribe(params => {
            this.groupId = params.id;
          });
        }
      }
    });
  }

  ngOnInit() {
    this.createCharacterForm = this.formBuilder.group({
      name: ['', [
        Validators.required,
        Validators.maxLength(25),
        Validators.minLength(2)
      ]],

      bio: ['', [
        Validators.required,
        Validators.maxLength(1000),
        Validators.minLength(10)
      ]],

      url: ['', [
        Validators.required,
        Validators.maxLength(30),
        Validators.minLength(2)
      ]],

      description: ['', [
        Validators.required,
        Validators.maxLength(60),
        Validators.minLength(30)
      ]]

    });
  }

  get name() {
    return this.createCharacterForm.get('name');
  }

  get description() {
    return this.createCharacterForm.get('description');
  }

  get bio() {
    return this.createCharacterForm.get('bio');
  }

  get url() {
    return this.createCharacterForm.get('url');
  }
  post() {
    this.character = {
      name: this.name.value,
      description: this.description.value,
      uid: this.user.uid,
      bio: this.bio.value,
      group: this.groupId,
      photoUrl: this.url.value,
    };

    this.characterService.addCharacter(this.character);
  }
}
