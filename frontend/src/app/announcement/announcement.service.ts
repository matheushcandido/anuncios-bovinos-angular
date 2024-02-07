// announcement.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class AnnouncementService {
  private apiUrl = 'http://localhost:8080/announcements';
  private tokenKey = 'auth-api';

  constructor(private http: HttpClient, private cookieService: CookieService) {}

  getAnnouncements(): Observable<any[]> {
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

  deleteAnnouncement(id: number): Observable<any> {
    const token = this.cookieService.get(this.tokenKey);
    if (token) {
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url, { headers });
    } else {
      return new Observable();
    }
  }
}