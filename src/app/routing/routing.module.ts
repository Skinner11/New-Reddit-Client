import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RedditUserComponent } from "../reddit-user/reddit-user.component"
import { RedditCommentComponent } from "../reddit-comment/reddit-comment.component"
import { RedditPostListComponent } from "../reddit-post-list/reddit-post-list.component"

const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: 'users/register',
    component: RedditUserComponent
  },
  {
    path: 'users/:id',
    component: RedditUserComponent
  },
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class RoutingModule { }
