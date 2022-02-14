import { Injectable } from '@angular/core'
import { Observable, defer, timer } from 'rxjs'
import { map } from 'rxjs/operators'

let COLORS = ['Red', 'White']
@Injectable({
  providedIn: 'root'
})
export class ColorsService {
  getColors (): Observable<string[]> {
    return defer(() => {
      const delay = Math.round(Math.random() * 3000)

      console.log('getting colors', !(delay % 2))

      return timer(delay).pipe(
        map(() => {
          if (delay % 2) {
            throw new Error('Server request failed')
          }

          return [...COLORS]
        })
      )
    })
  }

  addColor (color: string): Observable<string> {
    const delay = Math.round(Math.random() * 3000)

    console.log('adding color', !(delay % 2))

    return timer(delay).pipe(
      map(() => {
        if (delay % 2) {
          throw new Error('Server request failed')
        }

        COLORS.push(color)

        return color
      })
    )
  }

  removeColor (color: string): Observable<string> {
    const delay = Math.round(Math.random() * 3000)

    console.log('removing color', !(delay % 2))

    return timer(delay).pipe(
      map(() => {
        if (delay % 2) {
          throw new Error('Server request failed')
        }

        COLORS = COLORS.filter(item => item !== color)

        return color
      })
    )
  }

  constructor () { }
}
