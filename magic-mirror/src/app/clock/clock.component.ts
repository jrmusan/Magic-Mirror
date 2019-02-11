import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {
  date: Date = new Date();
  hours: number = this.date.getHours();
  hoursMod12: number = this.hours % 12;
  minutes: number = this.date.getMinutes();
  seconds: number = this.date.getSeconds();
  nightOrDay: string = ( this.hours >=12 ) ? "PM" : "AM";

  constructor() {
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
    this.hoursMod12 = this.hours % 12;
    this.minutes = this.date.getMinutes();
    this.seconds = this.date.getSeconds();
    this.nightOrDay = ( this.hours >=12 ? "PM" : "AM" );
  }
}
