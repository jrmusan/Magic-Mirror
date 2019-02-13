import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-motivation',
  templateUrl: './motivation.component.html',
  styleUrls: ['./motivation.component.css']
})
export class MotivationComponent implements OnInit {
  quotes: string[] = ['You got this!', 'You are beautiful and or handsome', 'yup'];
  currentQuote: string;


  constructor() {
    this.currentQuote = this.quotes[0];

    setInterval( () => {
      this.getQuote();
    }, 8000);
  }

  ngOnInit() {
  }

  getQuote() {
      this.quotes.unshift( this.quotes.pop() );
      this.currentQuote = this.quotes[0];
  }

}
