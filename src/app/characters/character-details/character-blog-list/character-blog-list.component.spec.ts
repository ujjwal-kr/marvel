import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterBlogListComponent } from './character-blog-list.component';

describe('CharacterBlogListComponent', () => {
  let component: CharacterBlogListComponent;
  let fixture: ComponentFixture<CharacterBlogListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterBlogListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterBlogListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
