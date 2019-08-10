import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CharacterService } from '../../../services/character.service';
import { BlogService } from '../../../services/blog.service';
import { Blog } from '../../../models/blog';
import { Group } from '../../../models/group';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-group-blog-list',
  templateUrl: './group-blog-list.component.html',
  styleUrls: ['./group-blog-list.component.sass']
})
export class GroupBlogListComponent implements OnInit, OnDestroy {
  blogs: Blog[];
  group: Group;
  groupId: string;

  groupSub: Subscription;
  blogSub: Subscription;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private characterService: CharacterService,
    private blogService: BlogService
  ) {
    this.activatedRoute.params.subscribe(params => {
      this.groupId = params.id;
      this.groupSub = this.characterService.getGroup(this.groupId).subscribe(group => {
        this.group = group;
        this.blogSub = this.blogService.getBlogs(this.groupId).subscribe(blogs => {
          this.blogs = blogs;
        });
      });
    });
  }

  ngOnInit() {
  }

  createBlogs() {
    return this.router.navigateByUrl('/create/group/' + this.groupId);
  }

  ngOnDestroy() {
    this.blogSub.unsubscribe();
    this.groupSub.unsubscribe();
  }

}
