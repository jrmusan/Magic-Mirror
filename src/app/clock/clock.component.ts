import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {
  date: Date;
  hours: number;
  hoursMod12: number;
  minutes: number;
  seconds: number;
  nightOrDay: string;

  constructor() {
    // initializes values at load of page
    this.date = new Date();
    this.hours = this.date.getHours();
    this.hoursMod12 = ( this.hours % 12 == 0 ? 12 : this.hours % 12 );
    this.minutes = this.date.getMinutes();
    this.seconds = this.date.getSeconds();
    this.nightOrDay = ( this.hours >=12 ) ? "PM" : "AM";

    // update time every second
    setInterval(() => {
      this.updateTime();
    },1000);
  }

  ngOnInit() {
  }

  updateTime() {
    this.date = new Date();
    this.hours = this.date.getHours();
    this.hoursMod12 = ( this.hours % 12 == 0 ? 12 : this.hours % 12 );
    this.minutes = this.date.getMinutes();
    this.seconds = this.date.getSeconds();
    this.nightOrDay = ( this.hours >=12 ? "PM" : "AM" );
  }
}
