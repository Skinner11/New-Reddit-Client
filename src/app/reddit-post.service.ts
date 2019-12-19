import { Injectable } from '@angular/core';
import { Post } from "./post";
import { Comment } from "./comment";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService, httpOptions } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class RedditPostService {

  private postUrl: string = 'http://localhost:8080/api/posts';
  constructor(private http: HttpClient) { }

  getPosts(): Promise<Post[]> {
    console.log("ELMONDTAM");
    return this.http.get<Post[]>(`${this.postUrl}`, httpOptions).toPromise();
  }

  getPost(id: number): Promise<Post> {
    return this.http.get<Post>(`${this.postUrl}/${id}`, httpOptions).toPromise();
  }

  createPost(post: Post): Promise<Post> {
    return this.http.post<Post>(`${this.postUrl}`, post, httpOptions).toPromise();
  }

  deletePost(id: number): Promise<Post> {
    return this.http.delete<Post>(`${this.postUrl}/${id}`, httpOptions).toPromise();
  }

  getPostsBySubreddit(subredditid: number): Promise<Post[]> {
    return this.http.get<Post[]>(`${this.postUrl}/+'subreddits'+/${subredditid}`, httpOptions).toPromise();
  }

  getCommentsForPost(postid: number): Promise<Comment[]> {
    return this.http.get<Comment[]>(`${this.postUrl}/${postid}+'/comments'`, httpOptions).toPromise();
  }

  createCommentUnderPost(postid: number, comment: Comment): Promise<Comment> {
    return this.http.post<Comment>(`${this.postUrl}/${postid}+'/comments'`,httpOptions).toPromise();
  }

}
