import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Announcement } from './announcement-create.model';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementCreateService {
  private apiUrl = 'http://localhost:8080/announcements';

  constructor(private http: HttpClient) {}

  createAnnouncement(announcement: Announcement): Observable<any> {
    return this.http.post(this.apiUrl, announcement);
  }

  getAnnouncementById(id: string): Observable<Announcement> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Announcement>(url);
  }

  updateAnnouncement(announcement: Announcement): Observable<any> {
    const url = `${this.apiUrl}/${announcement.id}`;
    return this.http.put(url, announcement);
  }  
}