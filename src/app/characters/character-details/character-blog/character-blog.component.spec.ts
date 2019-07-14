import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterBlogComponent } from './character-blog.component';

describe('CharacterBlogComponent', () => {
  let component: CharacterBlogComponent;
  let fixture: ComponentFixture<CharacterBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
