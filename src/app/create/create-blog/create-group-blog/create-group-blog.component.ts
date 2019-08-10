import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Blog } from '../../../models/blog';
import { BlogService } from '../../../services/blog.service';
import { User } from '../../../models/user';

@Component({
  selector: 'app-create-group-blog',
  templateUrl: './create-group-blog.component.html',
  styleUrls: ['./create-group-blog.component.sass']
})
export class CreateGroupBlogComponent implements OnInit {

createGroupBlog: FormGroup;
blog: Blog;
groupId: string;
user: User;

  constructor(
    private authService: AuthService,
    private blogService: BlogService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    this.activatedRoute.params.subscribe(params => {
      this.groupId = params.id;
    });

    this.authService.user$.subscribe(user => {
      this.user = user;
      if (!this.user) {
        this.router.navigateByUrl('/login');
      }
    });
  }

  ngOnInit() {
    this.createGroupBlog = this.formBuilder.group({
      heading: ['', [
        Validators.required,
        Validators.maxLength(25),
        Validators.minLength(4)
      ]],

      subheading: ['', [
        Validators.required,
        Validators.maxLength(30),
        Validators.minLength(6)
      ]],

      body: ['', [
        Validators.required,
        Validators.maxLength(500),
        Validators.minLength(20)
      ]]
    });
  }

  get heading() {
    return this.createGroupBlog.get('heading');
  }

  get subheading() {
    return this.createGroupBlog.get('subheading');
  }

  get body() {
    return this.createGroupBlog.get('body');
  }

  post() {
    this.blog = {
      uid: this.user.uid,
      heading: this.heading.value,
      subheading: this.subheading.value,
      body: this.body.value,
      reference: this.groupId
    };
    this.blogService.addBlog(this.blog);
    this.router.navigateByUrl('/group/' + this.groupId + '/blogs');
  }

}
