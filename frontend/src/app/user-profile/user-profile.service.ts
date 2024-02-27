import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {
  private baseUrl = 'http://localhost:8080/users';
  private tokenKey = 'auth-api';

  constructor(private http: HttpClient, private cookieService: CookieService) { }

  getCurrentUser(): Observable<any> {
    const token = this.cookieService.get(this.tokenKey);
    if (token) {
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
      return this.http.get(`${this.baseUrl}/current`, { headers });
    } else {
      return new Observable();
    }
  }

  deleteUser(id: string): Observable<any> {
    const token = this.cookieService.get(this.tokenKey);
    if (token) {
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete(url, { headers });
    } else {
      return new Observable();
    }
  }

  saveUser(id: string, userData: any): Observable<any> {
    const token = this.cookieService.get(this.tokenKey);
    if (token) {
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
      const url = `${this.baseUrl}/${id}`;
      return this.http.put(url, userData, { headers });
    } else {
      return new Observable();
    }
  }
}