export class WeatherModel {
    /*private*/ temperature: number;
  /*private*/ high: number;
  /*private*/ low: number;
  /*private*/ humidity: number;
  /*private*/ uvIndex: number;
  /*private*/ summary: string;

    constructor(
        temperature: number,
        high: number,
        low: number,
        humidity: number,
        uvIndex: number,
        summary: string
    ) {
        this.temperature = temperature;
        this.high = high;
        this.low = low;
        this.humidity = humidity;
        this.uvIndex = uvIndex;
        this.summary = summary;

    }
}
