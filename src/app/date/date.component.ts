import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {
  date: Date;
  dayOfMonth: number;
  dayOfMonthWord: string;
  month: number;
  year: number;
  dayOfWeek: number;
  dayOfWeekWord: string;

  // Friday, February 15, 2019

  constructor() {
    // initializes values at load of page
    this.date = new Date();
    this.dayOfMonth = this.date.getDate();
    this.dayOfWeek = this.date.getDay();
    this.month = this.date.getMonth();
    this.year = this.date.getFullYear();
    this.stringDayOfWeek( this.dayOfWeek );
    this.stringDayOfMonth( this.month );

    // update time every second
    setInterval(() => {
      this.updateTime();
    },1000);
  }

  ngOnInit() {
  }

  // update variable containg string with day of week
  stringDayOfWeek( dayOfWeek ) {
    switch( dayOfWeek ) {
      case 0:
        this.dayOfWeekWord = "Sunday";
      break;
      case 1:
        this.dayOfWeekWord = "Monday";
      break;
      case 2:
        this.dayOfWeekWord = "Tuesday";
      break;
      case 3:
        this.dayOfWeekWord = "Wednesday";
      break;
      case 4:
        this.dayOfWeekWord = "Thursday";
      break;
      case 5:
        this.dayOfWeekWord = "Friday";
      break;
      case 6:
        this.dayOfWeekWord = "Saturday";
        break;
      default:
        this.dayOfWeekWord = "Payday";
    }
  }

  // update variable containg string with day of week
  stringDayOfMonth( dayOfMonth ) {
    switch( dayOfMonth ) {
      case 0:
        this.dayOfMonthWord = "January";
        break;
      case 1:
        this.dayOfMonthWord = "February";
        break;
      case 2:
        this.dayOfMonthWord = "March";
        break;
      case 3:
        this.dayOfMonthWord = "April";
        break;
      case 4:
        this.dayOfMonthWord = "May";
        break;
      case 5:
        this.dayOfMonthWord = "June";
        break;
      case 6:
        this.dayOfMonthWord = "July";
        break;
      case 7:
        this.dayOfMonthWord = "August";
      case 8:
        this.dayOfMonthWord = "September";
      case 9:
        this.dayOfMonthWord = "October";
      case 10:
        this.dayOfMonthWord = "November";
      case 11:
        this.dayOfMonthWord = "December";
      default:
        this.dayOfMonthWord = "PayMonth";
    }
  }

  updateTime() {
    this.date = new Date();
    this.dayOfMonth = this.date.getDate();
    this.dayOfWeek = this.date.getDay();
    this.month = this.date.getMonth();
    this.year = this.date.getFullYear();
    this.stringDayOfWeek( this.dayOfWeek );
    this.stringDayOfMonth( this.dayOfMonth );
  }
}
