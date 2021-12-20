import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Weather } from 'src/interfaces'
import { shareReplay, Observable } from 'rxjs'
const CACHE_SIZE = 1
const API_URL = 'https://www.7timer.info/bin/astro.php?lon=113.2&lat=23.1&ac=0&unit=metric&output=json&tzshift=0'
@Injectable({
  providedIn: 'root'
})
export class WeatherAPIService {
  private cache$!: Observable<Weather>;
  constructor (private http: HttpClient) { }

  getWeather () {
    if (this.cache$) {
      console.log('returned cached data')
      return this.cache$
    }

    console.log('Do the request again')
    this.cache$ = this.requestWeather().pipe(
      shareReplay(CACHE_SIZE)
    )
    return this.cache$
  }

  private requestWeather () {
    return this.http.get<Weather>(API_URL)
  }
}
