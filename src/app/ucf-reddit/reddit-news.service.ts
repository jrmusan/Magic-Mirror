import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RedditNewsService {

  redditHeadlines: string[];
  newsHeadlines: string[];

  constructor(private http: HttpClient) { }

  getRedditHeadlines() {
    return this.http.get('/api/reddit');
  }

  getNewsHeadlines() {
    return this.http.get('/api/news');
  }

}
