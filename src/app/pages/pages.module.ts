import { NgModule } from '@angular/core';
import { AuthenticationModule } from './authentication/authentication.module';
import { FeedModule } from './feed/feed.module';


@NgModule({
  imports: [
    AuthenticationModule,
    FeedModule
  ],
  declarations: [],
  exports: [],
  providers: []
})
export class PagesModule { }
