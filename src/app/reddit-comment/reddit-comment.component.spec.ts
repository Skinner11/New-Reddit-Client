import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedditCommentComponent } from './reddit-comment.component';

describe('RedditCommentComponent', () => {
  let component: RedditCommentComponent;
  let fixture: ComponentFixture<RedditCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedditCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedditCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
