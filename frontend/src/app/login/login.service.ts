// login.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = 'http://localhost:8080/auth';
  private tokenKey = 'auth-api';

  constructor(
    private http: HttpClient,
    private router: Router,
    private cookieService: CookieService
  ) {}

  hasToken(): boolean {
    return this.cookieService.check(this.tokenKey);
  }

  login(username: string, password: string): Observable<any> {
    const body = { login: username, password: password };
    return this.http.post(`${this.apiUrl}/login`, body);
  }

  storeToken(token: string): void {
    const expirationDate = new Date();
    expirationDate.setHours(expirationDate.getHours() + 24);

    this.cookieService.set(this.tokenKey, token, expirationDate, '/');
  }

  getToken(): string | null {
    return this.cookieService.get(this.tokenKey);
  }

  logout(): void {
    this.cookieService.delete(this.tokenKey, '/');
    this.router.navigate(['/login']);
  }
}