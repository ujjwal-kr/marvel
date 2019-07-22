import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupBlogComponent } from './group-blog.component';

describe('GroupBlogComponent', () => {
  let component: GroupBlogComponent;
  let fixture: ComponentFixture<GroupBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
