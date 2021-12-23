import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Weather } from 'src/interfaces'
import { shareReplay, Observable, map } from 'rxjs'
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

  public countByDirection (arr: Array<Data> | undefined, val: string): number {
    if (!arr) return 0
    return arr.reduce((prev: number, next) => {
      return next.wind10m.direction === val ? ++prev : prev
    }, 0)
  }

  groupWind (): Observable<Map<string, number>> {
    return this.getWeather().pipe(map((v: Weather):Map<string, number> => {
      const result = v.dataseries?.reduce((prev, el) =>
        prev.set(el.wind10m.direction, (prev.get(el.wind10m.direction) || 0) + el.wind10m.speed),
      new Map<string, number>())
      result?.forEach((value: number, key: string) => {
        result.set(key, value / this.countByDirection(v.dataseries, key))
      })
      return result || new Map<string, number>()
    }))
  }
}
