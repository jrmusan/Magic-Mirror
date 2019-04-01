import { Component, OnInit } from '@angular/core';
import { TrafficService } from './traffic.service';
import { TrafficModel } from './traffic.model';

const TEN_MINUTES = 600000;

@Component({
  selector: 'app-travel-times',
  templateUrl: './travel-times.component.html',
  styleUrls: ['./travel-times.component.css']
})
export class TravelTimesComponent implements OnInit {
  /*private*/ traffic: TrafficModel;

  constructor(private trafficService: TrafficService) {  }

  updateTravelTimes() {
    this.trafficService.getTraffic().subscribe(
      (data: any) => {
        this.traffic = data;
      },
      err => console.log(err),
      () => console.log('Retrieved traffic data successfully.')
    );
  }

  ngOnInit() {
    // Initial fetch.
    this.updateTravelTimes();

    // Update every 10 minutes.
    setInterval(() => { this.updateTravelTimes(); }, TEN_MINUTES);
  }

}
