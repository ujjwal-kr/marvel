import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharectersComponent } from './charecters.component';

describe('CharectersComponent', () => {
  let component: CharectersComponent;
  let fixture: ComponentFixture<CharectersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharectersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharectersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
