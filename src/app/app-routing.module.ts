import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CharactersComponent } from './characters/characters.component';
import { CharacterDetailsComponent } from './characters/character-details/character-details.component';
import { DiscussionsComponent } from './discussions/discussions.component';
import { AboutComponent } from './about/about.component';
import { CreateBlogComponent } from './create/create-blog/create-blog.component';
import { CreateMemeComponent } from './create/create-meme/create-meme.component';
import { CreateCharacterComponent } from './create/create-character/create-character.component';
import { SignupComponent } from './core/signup/signup.component';
import { LoginComponent } from './core/login/login.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'characters', component: CharactersComponent },
  { path: 'characters/:id', component: CharacterDetailsComponent },
  { path: 'discussion', component: DiscussionsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'create/blog', component: CreateBlogComponent },
  { path: 'create/meme', component: CreateMemeComponent },
  { path: 'create/character', component: CreateCharacterComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
