import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class InstagramService {
  constructor(private http: HttpClient) {}

  getInstagramUser(userId) {
    return this.http.get(`https://www.instagram.com/${userId}/?__a=1`);
  }
}
