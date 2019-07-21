import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { Character} from '../models/character';
import { Router } from '@angular/router';
import { Group } from '../models/group';

@Injectable()

export class CharacterService {

characterCollection: AngularFirestoreCollection<Character>;
groupCollection: AngularFirestoreCollection<Group>;

groups$: Observable<Group[]>;
characters$: Observable<Character[]>;

  constructor(private db: AngularFirestore, private router: Router) {
    this.characterCollection = this.db.collection('characters');
    this.groupCollection = this.db.collection('groups');
    this.groups$ = this.db.collection<Group>('groups').valueChanges({idField: 'id'});
  }

  public getCharacters(id: string) {
    if (!id) {
      return of(null);
    }
    this.characters$ = this.db.collection('characters', ref => ref.where('group', '==', id)).valueChanges({idField: 'id'});
    return this.characters$;
  }

  public getCharacter(id: string) {
    return this.characterCollection.doc(id).valueChanges();
  }

  public getGroup(id: string) {
    return this.groupCollection.doc(id).valueChanges();
  }

  public addGroup(group: Group) {
    this.groupCollection.add(group).then(() => {
      this.router.navigateByUrl('/characters');
    })
      .catch((err) => {
        console.log(err);
      });
  }

  public addCharacter(character: Character) {
    this.characterCollection.add(character).then(() => {
      this.router.navigateByUrl('/characters');
    });
  }

}
