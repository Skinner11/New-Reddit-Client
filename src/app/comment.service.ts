import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Comment} from './comment';
import {User} from './user';
import {AuthService} from './auth.service'

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  public currentUser: User;
  private userUrl: string = 'http://localhost:8080/api/users/me';
  private commentUrl: string = 'http://localhost:8080/api/comments'
  private commentToSend: Comment;  

  constructor(private http: HttpClient, private auth: AuthService) { }

  //createComment(comment: string): Promise<Comment> {    
    //comment: Comment; 
    //return this.http.post<Comment>(`${this.commentUrl}`, comment, httpOptions).toPromise();
  //}
}
