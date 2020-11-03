import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FeedService } from 'src/app/services/feed.service';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.scss']
})
export class UserPostsComponent implements OnInit, OnDestroy {

  articlesSubscription: Subscription;
  articles: any;
  user: any;
  userId: number;
  focusedRow: any;
  articleTitle = new FormControl();
  articleBody = new FormControl();

  constructor(
    private route: ActivatedRoute,
    private feedService: FeedService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      if (params && params.id) {
        this.user = params;
        this.articlesSubscription = this.feedService.getArticles(params.id).subscribe((articles: any) => {
          this.articles = articles;
        });
      }
    });
    this.userId = +localStorage.getItem('user:id');
  }

  openArticle(article: any) {
    this.router.navigate([`user/${this.user.id}/article/${article.id}`], { queryParams: article}).then();
  }

  deleteArticle(article: any) {
    this.articles.splice(this.articles.indexOf(article), 1);
    this.feedService.deleteArticle(article.id);
  }

  createArticle() {
    if (!this.articleTitle.value) {
      return;
    }
    const newArticle = Object.create({});
    newArticle.body = this.articleBody.value;
    newArticle.title = this.articleTitle.value;
    newArticle.id = this.articles.length;
    newArticle.userId = this.userId;

    this.articles.push(newArticle);

    this.articleTitle.setValue(null);
    this.articleBody.setValue(null);

    this.feedService.createArticle(newArticle);
  }

  ngOnDestroy() {
    this.articlesSubscription.unsubscribe();
  }

}
