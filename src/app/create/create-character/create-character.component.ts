import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(
    private router: Router,
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

      group: ['', [
        Validators.required,
        Validators.maxLength(10),
        Validators.minLength(2)
      ]],

      description: ['', [
        Validators.required,
        Validators.maxLength(2000),
        Validators.minLength(30)
      ]]

    });
  }

  get name() {
    return this.createCharacterForm.get('name');
  }

  get group() {
    return this.createCharacterForm.get('group');
  }

  get description() {
    return this.createCharacterForm.get('description');
  }

  post() {
    this.character = {
      name: this.name.value,
      group: this.group.value,
      description: this.description.value,
      uid: this.user.uid
    };

    this.characterService.addCharacter(this.character);
  }
}
