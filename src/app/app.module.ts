import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

import { CoreModule } from './core/core.module';
import { MaterialModule } from './material.module';
import { CharacterService } from './services/character.service';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, 'marvel'),
    BrowserAnimationsModule,
    AngularFirestoreModule,
    MaterialModule,
    CoreModule,
    ReactiveFormsModule,
  ],
  providers: [CharacterService, BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
