import { Component, OnInit } from '@angular/core';
import { CustomEvent } from './customEvent.model';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  myEvents: CustomEvent[] = [
    // test events
    new CustomEvent('Jazzercise', 'Work on your glutes',
      'January 4')
    , new CustomEvent('SkyDiving', 'Jump to the ground',
      'January 6')
    , new CustomEvent('Quit', 'You can do better',
      'January 9')
  ];
  constructor() { }

  ngOnInit() {
  }

}
