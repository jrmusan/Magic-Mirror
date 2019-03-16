import { Component, OnInit } from '@angular/core';
import { CustomEvent } from './customEvent.model';
import {EventListService} from './event-list.service';


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

  constructor(private eventListService: EventListService) {  }

  ngOnInit() {
    this.eventListService.getEvents().subscribe(
      (data: any) => {
        this.myEvents = data;
      },
      err => console.log(err),
      () => console.log('Retrieved calendar event data successfully.')
    );
  }

}
