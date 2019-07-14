import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CharacterService} from '../../../services/character.service';

@Component({
  selector: 'app-group-blog',
  templateUrl: './group-blog.component.html',
  styleUrls: ['./group-blog.component.sass']
})
export class GroupBlogComponent implements OnInit {

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
  }

}
