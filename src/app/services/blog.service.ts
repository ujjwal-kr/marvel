import { Injectable } from '@angular/core';
import { Blog } from '../models/blog';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable()
export class BlogService {
  blogsCollection: AngularFirestoreCollection<Blog>;

  constructor(
     private db: AngularFirestore) {
    this.blogsCollection = this.db.collection('blogs');
  }

  public getBlog(id: string) {
    return this.blogsCollection.doc(id).valueChanges();
  }

  public getBlogs(id: string) {
    return this.db.collection('blogs', ref => ref.where('reference', '==', id)).valueChanges({idField: 'id'});
  }

  public addBlog(blog: Blog) {
    this.blogsCollection.add(blog);
  }
}
