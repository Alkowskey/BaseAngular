import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Weather } from 'src/interfaces'
import { shareReplay, Observable } from 'rxjs'
import { Data } from '../../interfaces'

const CACHE_SIZE = 1
const API_URL = 'https://www.7timer.info/bin/astro.php?lon=113.2&lat=23.1&ac=0&unit=metric&output=json&tzshift=0'
@Injectable({
  providedIn: 'root'
})
export class WeatherAPIService {
  private cache$!: Observable<Weather>;
  constructor (private http: HttpClient) { }

  getWeather (): Observable<Weather> {
    if (this.cache$) { return this.cache$ }

    this.cache$ = this.requestWeather().pipe(
      shareReplay(CACHE_SIZE)
    )
    return this.cache$
  }

  private requestWeather (): Observable<Weather> {
    return this.http.get<Weather>(API_URL)
  }

  private countByDirectionVal (arr: Array<Data> | undefined, val: string): number {
    let i = 0
    arr?.map((v) => v.wind10m.direction === val ? i++ : i)
    return i
  }

  groupWind (): Map<string, number> {
    const result = new Map<string, number>()
    this.getWeather().forEach(v => {
      v.dataseries?.map((el) =>
        result.set(el.wind10m.direction, (result.get(el.wind10m.direction) || 0) + el.wind10m.speed)
      )
      result.forEach((value: number, key: string) => {
        result.set(key, value / this.countByDirectionVal(v.dataseries, key))
      })
    })
    return result
  }
}
