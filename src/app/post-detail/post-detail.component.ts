import { Component, OnInit } from '@angular/core';
import { Post} from '../post';
import { Comment} from '../comment';
import {RedditPostService} from '../reddit-post.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  public post: Post = null;
  public comments: Comment[] = []

  constructor(
    private route: ActivatedRoute,
    private postService: RedditPostService
  ) { }

  async ngOnInit(): Promise<void> {
    const id = +this.route.snapshot.paramMap.get('id');
    this.post = await this.postService.getPost(id);
    this.comments = await this.postService.getCommentsForPost(id);
    }




}
