import { Component, OnInit, OnDestroy } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from '../auth.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit, OnDestroy {
  user: User;
  loginForm: FormGroup;

  mailNotFound: boolean;
  wrongPassword: boolean;
  networkProblem: boolean;

  constructor(
    private formBuilder: FormBuilder,
    public auth: AuthService
  ) {
    this.auth.user$.subscribe(user => {
      this.user = user;
    });

    this.mailNotFound = this.auth.mailNotFound;
    this.wrongPassword = this.auth.wrongPassword;
    this.networkProblem = this.auth.networkProblem;
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

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  login() {
    this.auth.signIn(this.email.value, this.password.value);
  }

  ngOnDestroy() {
    this.auth.mailNotFound = false;
    this.auth.wrongPassword = false;
    this.auth.networkProblem = false;
  }
}
