import { Component, OnInit, Input } from '@angular/core';
import { CustomEvent } from '../customEvent.model';

@Component({
  selector: 'app-event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.css']
})
export class EventItemComponent implements OnInit {
  @Input() anEvent: CustomEvent;

  constructor() { }

  ngOnInit() {
  }

}
