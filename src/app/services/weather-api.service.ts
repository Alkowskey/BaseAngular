import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Weather } from 'src/interfaces';

@Injectable({
  providedIn: 'root'
})
export class WeatherAPIService {

  constructor(private http: HttpClient) { }

  getWeather() {
    const url = "https://www.7timer.info/bin/astro.php?lon=113.2&lat=23.1&ac=0&unit=metric&output=json&tzshift=0" // for now it's hardcoded
    return this.http.get<Weather>(url);
  }

}
