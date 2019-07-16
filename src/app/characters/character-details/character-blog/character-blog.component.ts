import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CharacterService } from '../../../services/character.service';
import { BlogService } from '../../../services/blog.service';
import { AuthService } from '../../../core/auth.service';
import { Character } from '../../../models/character';
import { Blog } from '../../../models/blog';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-character-blog',
  templateUrl: './character-blog.component.html',
  styleUrls: ['./character-blog.component.sass']
})
export class CharacterBlogComponent implements OnInit, OnDestroy {
isAdmin: boolean = false;
charId: string;
blogId: string;

character: Character;
blog: Blog;

userSub: Subscription;
charSub: Subscription;
blogSub: Subscription;
  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private characterService: CharacterService,
              private blogService: BlogService,
              private authService: AuthService
  ) {
    this.userSub = this.authService.user$.subscribe(user => {
      this.isAdmin = this.authService.canWrite(user);
    });

    this.activatedRoute.params.subscribe(params => {
      this.charId = params.id;
      this.blogId = params.blogId;
      this.charSub = this.characterService.getCharacter(this.charId).subscribe(character => {
        this.character = character;
      });
      this.blogSub = this.blogService.getBlog(this.blogId).subscribe(blog => {
        this.blog = blog;
      });
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
    this.blogSub.unsubscribe();
    this.charSub.unsubscribe();
  }

}
