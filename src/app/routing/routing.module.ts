import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RedditUserComponent } from "../reddit-user/reddit-user.component"
import { RedditCommentComponent } from "../reddit-comment/reddit-comment.component"
import { RedditPostListComponent } from "../reddit-post-list/reddit-post-list.component"
import { PostDetailComponent } from '../post-detail/post-detail.component';
import {LoginFormComponent} from '../login-form/login-form.component';
import { AuthGuard } from '../auth-guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/posts',
    pathMatch: 'full'
  },
  {
    path: 'posts',    
    component: RedditPostListComponent
  },
  {
    path: 'users/register',
    component: RedditUserComponent
  },
  {
    path: 'users/:id',
    component: RedditUserComponent
  },
  {
    path: 'posts/:id',
    component: PostDetailComponent
  },
  {
    path: 'login',
    component: LoginFormComponent
  }
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class RoutingModule { }
