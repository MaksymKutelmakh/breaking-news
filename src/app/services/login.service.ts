import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NGXLogger } from 'ngx-logger';

@Injectable()
export class LoginService {

    constructor(
        private http: HttpClient,
        private logger: NGXLogger
    ) {}

    public login(username: string, password: string): Promise<any> {
        const customHeaders = new Map<string, string>();
        customHeaders.set('login', username);
        customHeaders.set('password', password);

        return this.http.post('https://jsonplaceholder.typicode.com/users', customHeaders)
            .toPromise()
            .catch(err => {
              this.logger.error(err);
              return null;
            });
    }
}
