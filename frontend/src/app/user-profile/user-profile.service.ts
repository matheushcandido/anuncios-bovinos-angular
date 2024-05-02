import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { User } from '../models/user.model';
import { PhoneVerification } from '../models/phoneVerification.model';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {
  private baseUrl = 'http://localhost:8080/users';
  private smsUrl = 'http://localhost:8080/sms/send';
  private tokenKey = 'auth-api';
  private proxyUrl = 'http://localhost:4200/apiviacep';

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

  updateUser(user: User): Observable<any> {
    const token = this.cookieService.get(this.tokenKey);
    if (token) {
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
      const url = `${this.baseUrl}/${user.id}`;
      return this.http.put(url, user, { headers });
    } else {
      return new Observable();
    }
  }
  
  getAddressByCEP(cep: string): Observable<any> {
    const url = `${this.proxyUrl}/ws/${cep}/json/`;
    return this.http.get(url);
  }

  verifyPhone(body: PhoneVerification): Observable<any> {
    const token = this.cookieService.get(this.tokenKey);
    if (token) {
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
      return this.http.post(this.smsUrl, body, { headers });
    } else {
      return new Observable();
    }
  }
}