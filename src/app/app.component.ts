import { Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `<div class="container-fluid">
    <div *ngIf="showLogout" (click)="logout()">Logout</div>
    <router-outlet></router-outlet>
  </div>`,
})
export class AppComponent implements DoCheck {

  showLogout: boolean;

  constructor(
    private router: Router
  ) {
  }

  ngDoCheck() {
    if (!location.href.includes('/login')) {
      this.showLogout = true;
    } else {
      this.showLogout = false;
    }
  }

  logout() {
    this.router.navigate(['/login']).then();
    localStorage.clear();
    this.showLogout = false;
  }
}
