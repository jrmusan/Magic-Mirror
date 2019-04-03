import { Component, OnInit } from '@angular/core';
import {RedditNewsService} from '../reddit-news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

   constructor(private redditNewsService: RedditNewsService) {  }

  ngOnInit() {
    this.redditNewsService.getNewsHeadlines().subscribe(
      (data: any) => {
        this.redditNewsService.newsHeadlines[] = data;
      },
      err => console.log(err),
      () => console.log('Retrieved news data successfully.')
    );
  }
}
