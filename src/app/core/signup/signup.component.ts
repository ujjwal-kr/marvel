import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '../../models/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.sass']
})
export class SignupComponent implements OnInit, OnDestroy {

  signUpForm: FormGroup;
  user: User;
  isAdmin: boolean;

  constructor(
    private router: Router,
    private auth: AuthService,
    public formBuilder: FormBuilder
  ) {
    auth.user$.subscribe(user => {
      this.user = user;
      this.isAdmin = this.auth.canWrite(this.user);
    });
  }

  ngOnInit() {
    this.signUpForm = this.formBuilder.group({
      email: ['', [
        Validators.required,
        Validators.maxLength(35),
        Validators.email
      ]],

      password: ['', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(20)
      ]],

      displayName: ['', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(25),
      ]]
    });
  }

  get email() { return this.signUpForm.get('email'); }
  get password() { return this.signUpForm.get('password'); }
  get displayName() { return this.signUpForm.get('displayName'); }

 signUp() {
    this.auth.signUp(this.email.value, this.password.value)
      .then(() => {
        this.auth.updateUser(this.user, { displayName: this.displayName.value });
      }).catch(err => { console.log(err); });
  }
  login() {
    this.router.navigateByUrl('/login');
  }
  ngOnDestroy() {
    this.auth.networkProblem = false;
    this.auth.emailExists = false;
  }


}
