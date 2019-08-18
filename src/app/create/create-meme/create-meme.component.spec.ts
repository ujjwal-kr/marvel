import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMemeComponent } from './create-meme.component';

describe('CreateMemeComponent', () => {
  let component: CreateMemeComponent;
  let fixture: ComponentFixture<CreateMemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateMemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
