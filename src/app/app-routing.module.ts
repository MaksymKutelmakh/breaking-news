import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/authentication/login/login.component';
import { FeedComponent } from './pages/feed/feed.component';
import { ArticleComponent } from './pages/feed/user-posts/article/article.component';
import { UserPostsComponent } from './pages/feed/user-posts/user-posts.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'feed',
    component: FeedComponent
  },
  {
    path: 'user/:id',
    component: UserPostsComponent
  },
  {
    path: 'user/:id/article/:id',
    component: ArticleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
