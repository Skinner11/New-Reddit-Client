import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedditPostListComponent } from './reddit-post-list.component';

describe('RedditPostComponent', () => {
  let component: RedditPostListComponent;
  let fixture: ComponentFixture<RedditPostListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedditPostListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedditPostListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
