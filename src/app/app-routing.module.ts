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
import { GroupBlogComponent } from './characters/group-details/group-blog/group-blog.component';
import { CharacterBlogComponent } from './characters/character-details/character-blog/character-blog.component';
import { CreateGroupBlogComponent } from './create/create-blog/create-group-blog/create-group-blog.component';
import { GroupDetailsComponent } from './characters/group-details/group-details.component';
import {GroupBlogListComponent} from './characters/group-details/group-blog-list/group-blog-list.component';
import {CharacterBlogListComponent} from './characters/character-details/character-blog-list/character-blog-list.component';
import { MemesComponent } from './memes/memes.component';
import { CreateMemeComponent } from './create/create-meme/create-meme.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'characters', component: CharactersComponent },
  { path: 'characters/:id', component: CharacterDetailsComponent },
  { path: 'group/:id', component: GroupDetailsComponent },
  { path: 'create/group', component: CreateGroupComponent },
  { path: 'group/:id/blogs', component: GroupBlogListComponent },
  { path: 'character/:id/blogs', component: CharacterBlogListComponent },
  { path: 'blog/group/:id/:blogId', component: GroupBlogComponent },
  { path: 'blog/character/:id/:blogId', component: CharacterBlogComponent },
  { path: 'create/group/:id', component: CreateGroupBlogComponent },
  { path: 'create/character/:id', component: CreateBlogComponent },     // character id
  { path: 'create/group/:id/character', component: CreateCharacterComponent },   // group id
  { path: 'create/meme', component: CreateMemeComponent },
  { path: 'signup', component: SignupComponent},
  { path: 'memes', component: MemesComponent },
  { path: 'login', component: LoginComponent},
  { path: 'profile', component: ProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
