import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CharacterService } from '../../../services/character.service';
import { AuthService } from '../../../core/auth.service';
import { Subscription } from 'rxjs/internal/Subscription';
import { Blog } from '../../../models/blog';
import { BlogService } from '../../../services/blog.service';
import { Group } from '../../../models/group';

@Component({
  selector: 'app-group-blog',
  templateUrl: './group-blog.component.html',
  styleUrls: ['./group-blog.component.sass']
})
export class GroupBlogComponent implements OnInit, OnDestroy {

blog: Blog;
group: Group;
groupId: string;
blogId: string;
isAdmin: boolean;

userSub: Subscription;
blogSub: Subscription;
groupSub: Subscription;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private characterService: CharacterService,
    private blogService: BlogService
  ) {
    this.userSub = this.authService.user$.subscribe(user => {
      this.isAdmin = this.authService.canWrite(user);
    });

    this.activatedRoute.params.subscribe(params => {
      this.blogId = params.blogId;
      this.groupId = params.id;
      this.blogSub = this.blogService.getBlog(this.blogId).subscribe( (blog: Blog) => {
        this.blog = blog;
        this.groupSub = this.characterService.getGroup(this.groupId).subscribe(group => {
          this.group = group;
        });
      });
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
    this.blogSub.unsubscribe();
    this.groupSub.unsubscribe();
  }

}
