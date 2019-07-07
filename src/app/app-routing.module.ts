import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CharactersComponent } from './characters/characters.component';
import { CharacterDetailsComponent } from './characters/character-details/character-details.component';
import { AboutComponent } from './about/about.component';
import { CreateBlogComponent } from './create/create-blog/create-blog.component';
import { CreateCharacterComponent } from './create/create-character/create-character.component';
import { SignupComponent } from './core/signup/signup.component';
import { LoginComponent } from './core/login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { CreateGroupComponent } from './create/create-group/create-group.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'characters', component: CharactersComponent },
  { path: 'characters/:id', component: CharacterDetailsComponent },
  { path: 'create/group', component: CreateGroupComponent },
  { path: 'create/character/:id', component: CreateBlogComponent },     // character id
  { path: 'create/group/:id/character', component: CreateCharacterComponent },   // group id
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
