import { Component, OnInit } from '@angular/core';
import {Post} from "../post";
import {Comment} from "../comment"
import {RedditPostService} from "../reddit-post.service"
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'reddit-post-list',
  templateUrl: './reddit-post-list.component.html',
  styleUrls: ['./reddit-post-list.component.css']
})
export class RedditPostListComponent implements OnInit {

  public filteredPosts: Post[];

  private posts: Post[] = []; 

  constructor(
    public _DomSanitizationService: DomSanitizer,
    private postService: RedditPostService
  ) { }

  async ngOnInit(): Promise<void> {
    //TODO Filterelni az aktuális felhasználónak szánt posztokat
    this.posts = await this.postService.getPosts();
  }

}
