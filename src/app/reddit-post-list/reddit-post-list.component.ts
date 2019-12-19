import { Component, OnInit } from '@angular/core';
import {Post} from "../post";

@Component({
  selector: 'reddit-post-list',
  templateUrl: './reddit-post-list.component.html',
  styleUrls: ['./reddit-post-list.component.css']
})
export class RedditPostListComponent implements OnInit {

  public filteredPosts: Post[];

  private posts: Post[] = []; 

  constructor() { }

  ngOnInit() {
  }

}
