import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VerifyPhoneService {

  private apiUrl = 'http://localhost:8080/sms/validate';
  private tokenKey = 'auth-api';

  constructor(private http: HttpClient, private cookieService: CookieService) { }

  verify(code: string, userId: string): Observable<any> {
    const token = this.cookieService.get(this.tokenKey);
    if (token) {
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
      const body = {
        code: code,
        userId: userId
      };
      return this.http.post(this.apiUrl, body, { headers });
    } else {
      return new Observable();
    }
  }  
}
