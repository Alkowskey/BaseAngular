import { Component, OnInit } from '@angular/core';
import { Weather } from 'src/interfaces';
import { WeatherAPIService } from '../services/weather-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  title = 'loginApp Home';
  weatherData: Weather;
  constructor(private weather: WeatherAPIService) {
    this.weatherData = { product: "temp", init: "loading", dataseries: [] };
  }

  ngOnInit(): void {
    console.log(this.weatherData?.dataseries?.length)
    this.weather.getWeather().subscribe((data: any) => this.weatherData = {
      ...data
    })
    setTimeout(() => {
      console.log(this.weatherData)
    }, 3000);

  }

}
