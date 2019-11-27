import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedditUserComponent } from './reddit-user.component';

describe('RedditUserComponent', () => {
  let component: RedditUserComponent;
  let fixture: ComponentFixture<RedditUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedditUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedditUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
