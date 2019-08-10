import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupBlogListComponent } from './group-blog-list.component';

describe('GroupBlogListComponent', () => {
  let component: GroupBlogListComponent;
  let fixture: ComponentFixture<GroupBlogListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupBlogListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupBlogListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
