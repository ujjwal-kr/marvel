import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGroupBlogComponent } from './create-group-blog.component';

describe('CreateGroupBlogComponent', () => {
  let component: CreateGroupBlogComponent;
  let fixture: ComponentFixture<CreateGroupBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateGroupBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateGroupBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
