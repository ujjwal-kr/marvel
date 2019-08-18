import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Meme } from '../models/meme';

@Injectable()

export class MemeService {
memeCollection: AngularFirestoreCollection<Meme[]>;
  constructor(private db: AngularFirestore) {
    this.memeCollection = this.db.collection('memes');
   }

   deleteMeme(id: string) {
    return this.memeCollection.doc(id).delete();
   }

   getMemes() {
    return this.db.collection('memes').get();
   }

   addMemes(meme) {
    return this.memeCollection.add(meme);
   }
}
