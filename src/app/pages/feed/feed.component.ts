import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FeedService } from 'src/app/services/feed.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit, OnDestroy, AfterViewInit {

  usersSubscriptions: Subscription;
  users: any[];
  user: any;
  constructor(
    private feedService: FeedService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.usersSubscriptions = this.feedService.getUsers().subscribe((users: any[]) => {
      this.users = users;
      if (this.user) {
        this.users.push(this.user);
      }
    });
    this.route.queryParams.subscribe((params) => {
      if (params && params.id) {
        this.user = params;
      }
    });
  }

  ngAfterViewInit() {
  }

  viewPosts(user: any) {
    this.router.navigate([`user/${user.id}`], { queryParams: user }).then();
  }

  ngOnDestroy() {
    this.usersSubscriptions.unsubscribe();
  }

}
