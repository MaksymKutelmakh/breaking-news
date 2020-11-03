import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  remember = false;
  loginFormControl = new FormControl();
  passwordFormControl = new FormControl();
  error: boolean;

  constructor(
    private loginService: LoginService,
    private router: Router
  ) {
  }

  ngOnInit() {
  }

  public async onSubmit(login: string, password: string) {
    const response = await this.loginService.login(login, password);
    if (response != null) {
      const user = Object.create(response);
      user.id = response.id;
      user.email = login;
      user.name = 'Dave';
      user.phone = '748327489237428';
      this.saveUser(user);
      this.error = false;
      this.router.navigate(['/feed'], {queryParams: user}).then();
    } else {
      this.error = true;
    }
  }

  saveUser(user: any) {
    localStorage.setItem('user:name', user.name);
    localStorage.setItem('user:email', user.email);
    localStorage.setItem('user:phone', user.phone);
    localStorage.setItem('user:id', user.id);
  }

}
