import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Blog } from '../models/blog';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable()
export class BlogService {
  blogs$: Observable<Blog[]>;
  blogsCollection: AngularFirestoreCollection<Blog>;

  constructor(
    private router: Router, private db: AngularFirestore) {
    this.blogsCollection = this.db.collection('blogs');
    this.blogs$ = this.db.collection<Blog>('blogs').valueChanges();
  }

  addBlog(blog: Blog) {
    this.blogsCollection.add(blog).then(() => {
      this.router.navigateByUrl('/');
    });
  }
}
