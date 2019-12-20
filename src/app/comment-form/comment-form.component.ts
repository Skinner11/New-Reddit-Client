import { Component, OnInit } from '@angular/core';
import { CommentService } from '../comment.service';
import { Router } from '@angular/router';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent implements OnInit {

  message: string;

  commentForm = this.fb.group({
    comment: ['', [ Validators.required ]]   
  });

  constructor(
    //private commentService: CommentService,
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
  }

  async onSubmit() {
    try {
      this.message = null;
      //await this.commentService.addComment(this.comment.value);
    } catch (e) {
      this.message = 'Cant send comment!';
    }
  }

}
