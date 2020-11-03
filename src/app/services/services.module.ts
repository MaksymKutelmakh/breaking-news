import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from './login.service';
import { FeedService } from './feed.service';

@NgModule({
    imports: [
        HttpClientModule
    ],
    declarations: [],
    providers: [
        LoginService,
        FeedService
    ]
})
export class HttpModule {

}

