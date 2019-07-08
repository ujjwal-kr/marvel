import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/auth.service';
import { Router } from '@angular/router';
import { CharacterService } from '../../services/character.service';
import { User } from '../../models/user';
import { Group } from '../../models/group';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.sass']
})
export class CreateGroupComponent implements OnInit {
user: User;
group: Group;
createGroupForm: FormGroup;
admin: boolean;

  constructor(
    private router: Router,
    private authService: AuthService,
    private characterService: CharacterService,
    private formBuilder: FormBuilder
  ) {
    this.authService.user$.subscribe(user => {
      if (!user) {
        return this.router.navigateByUrl('/login');
      } else {
        this.user = user;
        this.admin = this.authService.canWrite(this.user);
        if (!this.admin) {
          return this.router.navigateByUrl('/');
        }
      }
    });
  }

  ngOnInit() {
    this.createGroupForm = this.formBuilder.group({
      name: ['', [
        Validators.required
      ]],

      description: ['', [
        Validators.required
      ]]
    });
  }

  get name() {
    return this.createGroupForm.get('name');
  }

  get description() {
    return this.createGroupForm.get('description');
  }

  post() {
    this.group = {
      name: this.name.value,
      description: this.description.value,
      uid: this.user.uid
    };

    this.characterService.addGroup(this.group);
    console.log(this.group);
  }
}
