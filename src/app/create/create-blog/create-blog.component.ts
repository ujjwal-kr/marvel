import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Blog } from '../../models/blog';
import { User } from '../../models/user';
import { AuthService } from '../../core/auth.service';
import { BlogService } from '../../services/blog.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.sass']
})
export class CreateBlogComponent implements OnInit {

createBlogForm: FormGroup;
blog: Blog;
user: User;
charId: string;

  constructor(private formBuilder: FormBuilder,
              private auth: AuthService,
              private blogService: BlogService,
              private router: Router,
              private route: ActivatedRoute
  ) {
    this.auth.user$.subscribe(user => {
      this.user = user;
      if (!user) {
        this.router.navigateByUrl('/');
      } else {
        this.route.params.subscribe( params => {
          this.charId = params.id;
        });
      }
    });
  }

  ngOnInit() {
    this.createBlogForm = this.formBuilder.group({
      heading: ['', [
        Validators.required,
        Validators.maxLength(25),
        Validators.minLength(6)
      ]],

      subheading: ['', [
        Validators.required,
        Validators.maxLength(30),
        Validators.minLength(6)
      ]],

      body: ['', [
        Validators.required,
        Validators.maxLength(300),
        Validators.minLength(20)
      ]]
    });
  }

  get heading() {
    return this.createBlogForm.get('heading');
  }

  get subheading() {
    return this.createBlogForm.get('heading');
  }

  get body() {
    return this.createBlogForm.get('body');
  }

  post() {
    this.blog = {
      reference: this.charId,
      uid: this.user.uid,
      heading: this.heading.value,
      subheading: this.subheading.value,
      body: this.body.value
    };

    this.blogService.addBlog(this.blog);
    this.router.navigateByUrl('/character/' + this.charId + '/blogs');
  }

}

