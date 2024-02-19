import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username!: string;
  password!: string;

  constructor(private loginService: LoginService, private router: Router) { }

  login() {
    this.loginService.login(this.username, this.password).subscribe(
      response => {
        this.loginService.storeToken(response.token);

        this.router.navigate(['/']);
      },
      error => {
        console.error('Login failed', error);
      }
    );
  }
}