import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8080/users';
  private tokenKey = 'auth-api';

  constructor(private http: HttpClient, private cookieService: CookieService) {}

  getUsers(): Observable<any[]> {
    const token = this.cookieService.get(this.tokenKey);
    if (token) {
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
    return this.http.get<any[]>(this.apiUrl, { headers });
    } else {
      return new Observable();
    }
  }

  blockUser(id: string, blockedUser: any): Observable<any> {
    const token = this.cookieService.get(this.tokenKey);
    if (token) {
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
      const url = `${this.apiUrl}/${id}`;
      return this.http.put(url, blockedUser, { headers });
    } else {
      return new Observable();
    }
  }
}
