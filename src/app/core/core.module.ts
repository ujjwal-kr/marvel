import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth.service';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { SignupComponent } from './signup/signup.component';
import { MaterialModule } from '../material.module';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [ SignupComponent, LoginComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  providers: [
    AngularFireAuth,
    AuthService
  ]
})
export class CoreModule { }
