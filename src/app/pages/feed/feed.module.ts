import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FeedComponent } from './feed.component';
import { UserPostsComponent } from './user-posts/user-posts.component';
import { ArticleComponent } from './user-posts/article/article.component';


@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  declarations: [
    FeedComponent,
    UserPostsComponent,
    ArticleComponent
  ],
  exports: [],
  providers: [
  ]
})
export class FeedModule { }
