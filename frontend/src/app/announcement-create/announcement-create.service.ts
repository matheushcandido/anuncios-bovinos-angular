import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { Announcement } from './announcement-create.model';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementCreateService {
  private apiUrl = 'http://localhost:8080/announcements';
  private tokenKey = 'auth-api';

  constructor(private http: HttpClient, private cookieService: CookieService) {}

  createAnnouncement(formData: FormData): Observable<any> {
    const token = this.cookieService.get(this.tokenKey);
    if (token) {
        const headers = new HttpHeaders({
            'Authorization': `Bearer ${token}`
        });
        return this.http.post(this.apiUrl, formData, { headers });
    } else {
        return new Observable();
    }
  }

  getAnnouncementById(id: string): Observable<Announcement> {
    const token = this.cookieService.get(this.tokenKey);
    if (token) {
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
      const url = `${this.apiUrl}/${id}`;
      return this.http.get<Announcement>(url, { headers });
    } else {
      return new Observable();
    }
  }

  updateAnnouncement(formData: FormData): Observable<any> {
    const token = this.cookieService.get(this.tokenKey);
    if (token) {
        const headers = new HttpHeaders({
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'multipart/form-data'
        });
        return this.http.put(this.apiUrl, formData, { headers });
    } else {
        return new Observable();
    }
  }
}