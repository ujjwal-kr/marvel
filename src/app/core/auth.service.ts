import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

import {Observable, of} from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { User } from '../models/user';
import {Router} from '@angular/router';


@Injectable()

export class AuthService {
user$: Observable<User>;
errorInMail: boolean;

  constructor(private afAuth: AngularFireAuth,
              private afs: AngularFirestore,
              private router: Router) {
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    );
  }

// TODO handle password errors efficiently

  signUp(email: string, password: string) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then(user => {
        return this.setDoc(user.user);
      })
      .catch(async error => {
        const code = await error.code;
        if (code === 'auth/email-already-in-use') {
          this.errorInMail = true;
        } else {
          if (code === 'auth/network-request-failed') {
            console.log('Check Your Connection, Boy');
          }
        }
      });
  }

  signIn(email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then(() => {
        this.router.navigateByUrl('/');
      })
      .catch(async error => {

        const code = error.code;
        if (code === 'auth/wrong-password') {
           console.log('wrong Password');
        }
        if (code === 'auth/network-request-failed') {
            console.log('Check Your Connection, Boy');
        }
        if (code === 'auth/user-not-found') {
          console.log('Email Dosen\'t Exist');
        }

      });
  }

  async updateUser(user: User, data: any) {
   if (await this.errorInMail) {
    return console.log('Email Already In Use');
   } else {
     return this.afs.doc(`users/${user.uid}`).update(data).then(
       () => {
         this.router.navigateByUrl('/profile');
       });
   }
  }

  signOut() {
    this.afAuth.auth.signOut().then(() => {
      console.log('Signed Out');
    });
  }

  private setDoc(user) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);
    const data: User = {
      uid: user.uid,
      email: user.email,
      roles: {
        user: true,
        admin: false
      },
    };
    return userRef.set(data, { merge: true });
  }

  canWrite(user: User): boolean {
    const allowed = ['admin'];
    return this.checkAuthorization(user, allowed);
  }

// TODO Self-Authorization

// determines if user has matching role
  private checkAuthorization(user: User, allowedRoles: string[]): boolean {
    if (!user) { return false; }
    for (const role of allowedRoles) {
      if ( user.roles[role] ) {
        return true;
      }
    }
    return false;
  }

}
