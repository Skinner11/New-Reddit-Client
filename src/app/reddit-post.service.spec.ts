import { TestBed } from '@angular/core/testing';

import { RedditPostService } from './reddit-post.service';

describe('RedditPostService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RedditPostService = TestBed.get(RedditPostService);
    expect(service).toBeTruthy();
  });
});
