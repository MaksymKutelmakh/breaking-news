import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable()
export class FeedService {

    constructor(
        private http: HttpClient
    ) {}

    public getUsers(): Observable<any[]> {

        return this.http.get('https://jsonplaceholder.typicode.com/users')
            .pipe(map((response: any) => {
                if (response.length) {
                    return response;
                } else {
                    return [];
                }
            }));
    }

    getArticles(id): Observable<any[]> {

        return this.http.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
            .pipe(map((response: any) => {
                if (response.length) {
                    return response;
                } else {
                    return [];
                }
            }));
    }

    deleteArticle(id: number): Observable<void> {

        return this.http.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
          .pipe(
            map((response: any) => {})
          );
    }

    createArticle(article: any): Observable<any> {

        return this.http.post(`https://jsonplaceholder.typicode.com/posts/${article.id}`, article)
          .pipe(
            map((response: any) => {})
          );
    }
}
