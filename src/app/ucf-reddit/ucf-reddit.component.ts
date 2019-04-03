import { Component, OnInit } from '@angular/core';
import {RedditNewsService} from './reddit-news.service';

@Component({
  selector: 'app-ucf-reddit',
  templateUrl: './ucf-reddit.component.html',
  styleUrls: ['./ucf-reddit.component.css']
})
export class UcfRedditComponent implements OnInit {

  headlines: string[];
  currentHeadline: string;

  constructor(private redditNewsService: RedditNewsService) {  }

  ngOnInit() {

    // perform api call
    this.redditNewsService.getRedditHeadlines().subscribe(
      (data: any) => {
        this.redditNewsService.redditHeadlines = data;
        this.headlines = data;
      },
      err => console.log(err),
      () => console.log('Retrieved reddit data successfully.')
    );

    // keep headline array up to date with service
    setInterval( () => {
      this.updateHeadlines();
    }, 8000);

    // set a current headline to display
    this.currentHeadline = this.headlines[0];
    setInterval( () => {
      this.getHeadline();
    }, 8000);
  }

  updateHeadlines() {
    this.headlines = this.redditNewsService.redditHeadlines.concat(
      this.redditNewsService.newsHeadlines);
  }

  getHeadline() {
      this.headlines.unshift( this.headlines.pop() );
      this.currentHeadline = this.headlines[0];
  }

}
