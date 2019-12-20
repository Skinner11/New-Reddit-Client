import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatIconModule, MatButtonToggleModule, MatButtonModule, MatInputModule, MatFormFieldModule } from '@angular/material';
import { RedditPostListComponent } from './reddit-post-list/reddit-post-list.component';
import { RedditCommentComponent } from './reddit-comment/reddit-comment.component';
import { RedditUserComponent } from './reddit-user/reddit-user.component';
import { RoutingModule } from './routing/routing.module';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { CommentFormComponent } from './comment-form/comment-form.component';

@NgModule({
  declarations: [
    AppComponent,
    RedditPostListComponent,
    RedditCommentComponent,
    RedditUserComponent,
    PostDetailComponent,
    LoginFormComponent,
    CommentFormComponent,    
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    FlexLayoutModule,
    NoopAnimationsModule,
    MatToolbarModule,
    MatButtonToggleModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    RoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
