import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { Announcement } from '../announcement-create/announcement-create.model';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementViewService {

  private apiUrl = 'http://localhost:8080/announcements';
  private tokenKey = 'auth-api';

  constructor(private http: HttpClient, private cookieService: CookieService) { }

  getAnnouncement(id: string): Observable<Announcement> {
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
}
