import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';
import { WeatherModel } from './weather.model';

const TEN_MINUTES = 600000;

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  /*private*/ weather: WeatherModel;

  constructor(private weatherService: WeatherService) {  }

  updateWeather() {
    this.weatherService.getWeather().subscribe(
      (data: any) => {
        this.weather = data;
      },
      err => console.log(err),
      () => console.log('Retrieved weather data successfully.')
    );
  }

  ngOnInit() {
    // Initial fetch.
    this.updateWeather();

    // Update every 10 minutes.
    setInterval(() => { this.updateWeather(); }, TEN_MINUTES);
  }

}
