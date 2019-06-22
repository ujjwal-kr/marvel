import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../auth.service';
import {User} from '../../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
user: User;
loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private auth: AuthService
  ) {
    this.auth.user$.subscribe(user => {
      this.user = user;
      if (this.user) {
        this.router.navigate(['/profile']);
      }
    });
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({

      email: ['', [
        Validators.email,
        Validators.required
      ]],

      password: ['', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(20)
      ]]

    });
  }

  get email() { return this.loginForm.get('email'); }
  get password() { return this.loginForm.get('password'); }

  login() {
    this.auth.signIn(this.email.value, this.password.value).then(data => console.log(data));
  }

}
