import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

import { SignupComponent } from './core/signup/signup.component';
import { LoginComponent } from './core/login/login.component';
import { AuthService } from './core/auth.service';
import { UpdateService } from './services/update.service';
import { MaterialModule } from './material.module';
import { CharacterService } from './services/character.service';
import { MemeService } from './services/meme.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { CharactersComponent } from './characters/characters.component';
import { CharacterDetailsComponent } from './characters/character-details/character-details.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { CreateCharacterComponent } from './create/create-character/create-character.component';
import { CreateBlogComponent } from './create/create-blog/create-blog.component';
import { ProfileComponent } from './profile/profile.component';
import { BlogService } from './services/blog.service';
import { CreateGroupComponent } from './create/create-group/create-group.component';
import { GroupDetailsComponent } from './characters/group-details/group-details.component';
import { GroupBlogComponent } from './characters/group-details/group-blog/group-blog.component';
import { CharacterBlogComponent } from './characters/character-details/character-blog/character-blog.component';
import { CreateGroupBlogComponent } from './create/create-blog/create-group-blog/create-group-blog.component';
import { LoadingComponent } from './loading/loading.component';
import { GroupBlogListComponent } from './characters/group-details/group-blog-list/group-blog-list.component';
import { CharacterBlogListComponent } from './characters/character-details/character-blog-list/character-blog-list.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { MemesComponent } from './memes/memes.component';
import { CreateMemeComponent } from './create/create-meme/create-meme.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    CharactersComponent,
    CharacterDetailsComponent,
    AboutComponent,
    FooterComponent,
    CreateCharacterComponent,
    CreateBlogComponent,
    ProfileComponent,
    CreateGroupComponent,
    GroupDetailsComponent,
    GroupBlogComponent,
    CharacterBlogComponent,
    CreateGroupBlogComponent,
    LoadingComponent,
    GroupBlogListComponent,
    CharacterBlogListComponent,
    SignupComponent,
    LoginComponent,
    MemesComponent,
    CreateMemeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, 'marvel'),
    BrowserAnimationsModule,
    AngularFirestoreModule.enablePersistence(),
    AngularFireAuthModule,
    MaterialModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [CharacterService, BlogService, AuthService, MemeService, AngularFireAuth, UpdateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
