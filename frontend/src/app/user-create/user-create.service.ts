import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { User } from '../register/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserCreateService {

  private apiUrl = 'http://localhost:8080/users';
  private tokenKey = 'auth-api';

  constructor(private http: HttpClient, private cookieService: CookieService) {}

  createUser(user: User): Observable<any> {
    const token = this.cookieService.get(this.tokenKey);
    if (token) {
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
      return this.http.post(this.apiUrl, user, { headers });
    } else {
      return new Observable();
    }
  }
}
