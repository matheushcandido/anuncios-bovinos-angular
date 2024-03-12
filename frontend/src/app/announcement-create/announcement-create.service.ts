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

  createAnnouncement(announcement: Announcement): Observable<any> {
    const token = this.cookieService.get(this.tokenKey);
    if (token) {
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
      return this.http.post(this.apiUrl, announcement, { headers });
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

  updateAnnouncement(announcement: Announcement): Observable<any> {
    const token = this.cookieService.get(this.tokenKey);
    if (token) {
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
      const url = `${this.apiUrl}/${announcement.id}`;
      return this.http.put(url, announcement, { headers });
    } else {
      return new Observable();
    }
  }
  
  uploadImage(file: File, announcementId: string): Observable<any> {
    const token = this.cookieService.get(this.tokenKey);
    if (token) {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('announcementId', announcementId);

        const headers = new HttpHeaders({
            'Authorization': `Bearer ${token}`
        });
        const url = `${this.apiUrl}/upload`;
        return this.http.post(url, formData, { headers });
    } else {
        return new Observable();
    }
  }
}