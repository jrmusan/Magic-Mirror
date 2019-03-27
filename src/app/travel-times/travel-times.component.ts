import { Component, OnInit } from '@angular/core';
import { TrafficService } from './traffic.service';
import { TrafficModel } from './traffic.model';

@Component({
  selector: 'app-travel-times',
  templateUrl: './travel-times.component.html',
  styleUrls: ['./travel-times.component.css']
})
export class TravelTimesComponent implements OnInit {
  /*private*/ traffic: TrafficModel;

  constructor(private trafficService: TrafficService) {  }

  ngOnInit() {
    this.trafficService.getTraffic().subscribe(
      (data: any) => {
        this.traffic = data;
      },
      err => console.log(err),
      () => console.log('Retrieved traffic data successfully.')
    );
  }

}
