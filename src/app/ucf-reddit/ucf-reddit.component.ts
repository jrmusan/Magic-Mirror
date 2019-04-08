import { Component, OnInit } from '@angular/core';
import {RedditNewsService} from './reddit-news.service';

const TEN_MINUTES = 600000;

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

    this.apiCall();

    // Update every 10 minutes.
    setInterval(() => { this.apiCall(); }, TEN_MINUTES);

  }

  apiCall() {
    // perform api call
    this.redditNewsService.getRedditHeadlines().subscribe(
      (data: any) => {
        this.redditNewsService.redditHeadlines = data;
        this.headlines = data.news.concat(JSON.parse(data.reddit));
        this.currentHeadline = this.headlines[0];

        setInterval( () => {
          this.getHeadline();
        }, 30000);

      },
      err => console.log(err),
      () => console.log('Retrieved reddit data successfully.')
    );
  }

  getHeadline() {
      this.headlines.unshift( this.headlines.pop() );
      this.currentHeadline = this.headlines[0];
  }

}
