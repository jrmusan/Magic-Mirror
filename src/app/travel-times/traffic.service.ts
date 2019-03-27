import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TrafficService {

  constructor(private http: HttpClient) { }

  getTraffic() {
    return this.http.get('/api/traffic');
  }
}
