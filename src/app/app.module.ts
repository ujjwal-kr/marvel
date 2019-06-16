import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

import { MaterialModule } from './material.module';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { CharactersComponent } from './characters/characters.component';
import { CharacterDetailsComponent } from './characters/character-details/character-details.component';
import { AboutComponent } from './about/about.component';
import { DiscussionsComponent } from './discussions/discussions.component';
import { FooterComponent } from './footer/footer.component';
import { CreateComponent } from './create/create.component';
import { CreateCharacterComponent } from './create/create-character/create-character.component';
import { CreateBlogComponent } from './create/create-blog/create-blog.component';
import { CreateMemeComponent } from './create/create-meme/create-meme.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    CharactersComponent,
    CharacterDetailsComponent,
    AboutComponent,
    DiscussionsComponent,
    FooterComponent,
    CreateComponent,
    CreateCharacterComponent,
    CreateBlogComponent,
    CreateMemeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, 'marvel'),
    BrowserAnimationsModule,
    AngularFirestoreModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
