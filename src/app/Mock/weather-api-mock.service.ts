import { Data, Weather } from 'src/interfaces'
import { map, Observable, of } from 'rxjs'

export class WeatherApiMockService {
  constructor () { }
  getWeather (): Observable<Weather> {
    const data: Weather = { init: '2022021600', product: 'astro', dataseries: [{ timepoint: 3, cloudcover: 7, seeing: 6, transparency: 3, lifted_index: 15, rh2m: 8, wind10m: { direction: 'E', speed: 2 }, temp2m: 18, prec_type: 'none' }] }
    return of(data)
  }

  public countByDirection (arr: Pick<Data, 'wind10m'>[] | undefined, val: string): number {
    if (!arr) return 0
    return 1
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
