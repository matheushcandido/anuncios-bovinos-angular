import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {
  private baseUrl = 'http://localhost:8080/users';

  constructor(private http: HttpClient) { }

  getCurrentUser(): Observable<any> {
    return this.http.get(`${this.baseUrl}/current`);
  }
}