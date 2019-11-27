import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatIconModule, MatButtonModule, MatInputModule } from '@angular/material';
import { RedditPostComponent } from './reddit-post/reddit-post.component';
import { RedditCommentComponent } from './reddit-comment/reddit-comment.component';
import { RedditUserComponent } from './reddit-user/reddit-user.component';

@NgModule({
  declarations: [
    AppComponent,
    RedditPostComponent,
    RedditCommentComponent,
    RedditUserComponent,    
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
