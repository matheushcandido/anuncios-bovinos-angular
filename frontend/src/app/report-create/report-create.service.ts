import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { Report } from './report-create.model';

@Injectable({
  providedIn: 'root'
})
export class ReportCreateService {

  private apiUrl = 'http://localhost:8080/reports';
  private tokenKey = 'auth-api';

  constructor(private http: HttpClient, private cookieService: CookieService) {}

  createReport(report: Report): Observable<any> {
    const token = this.cookieService.get(this.tokenKey);
    if (token) {
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
      return this.http.post(this.apiUrl, report, { headers });
    } else {
      return new Observable();
    }
  }
}
