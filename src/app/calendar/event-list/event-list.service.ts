import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventListService {

  constructor(private http: HttpClient) { }

  getEvents() {
    return this.http.get('/api/weather');
  }
}
