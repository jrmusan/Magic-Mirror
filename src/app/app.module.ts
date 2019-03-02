import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClockComponent } from './clock/clock.component';
//import { WeatherComponent } from './weather/weather.component';
import { MotivationComponent } from './motivation/motivation.component';
import { CalendarComponent } from './calendar/calendar.component';
import { UcfRedditComponent } from './ucf-reddit/ucf-reddit.component';
import { TravelTimesComponent } from './travel-times/travel-times.component';
import { DateComponent } from './date/date.component';
import { EventItemComponent } from './calendar/event-list/event-item/event-item.component';
import { EventListComponent } from './calendar/event-list/event-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ClockComponent,
    //WeatherComponent,
    MotivationComponent,
    CalendarComponent,
    UcfRedditComponent,
    TravelTimesComponent,
    DateComponent,
    EventItemComponent,
    EventListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
