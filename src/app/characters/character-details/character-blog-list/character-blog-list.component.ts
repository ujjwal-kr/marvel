import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CharacterService } from '../../../services/character.service';
import { BlogService } from '../../../services/blog.service';
import { Blog } from '../../../models/blog';
import { Character } from '../../../models/character';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-character-blog-list',
  templateUrl: './character-blog-list.component.html',
  styleUrls: ['./character-blog-list.component.sass']
})
export class CharacterBlogListComponent implements OnInit, OnDestroy {
charId: string;
character: Character;
blogs: Blog[];

characterSub: Subscription;
blogSub: Subscription;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private characterService: CharacterService,
    private blogService: BlogService
  ) {
    this.activatedRoute.params.subscribe(params => {
      this.charId = params.id;
      this.characterSub = this.characterService.getCharacter(this.charId).subscribe(character => {
        this.character = character;
        this.blogSub = this.blogService.getBlogs(this.charId).subscribe(blogs => {
          this.blogs = blogs;
        });
      });
    });
  }

  ngOnInit() {
  }
  createBlogs() {
    return this.router.navigateByUrl('/create/character/' + this.charId);
  }

  ngOnDestroy() {
    this.blogSub.unsubscribe();
    this.characterSub.unsubscribe();
  }

}
