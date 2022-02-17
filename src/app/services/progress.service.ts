import { Injectable } from '@angular/core'
import { concatMap, delay, from, Observable, of } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ProgressService {
  constructor () { }
  progress (): Observable<number> {
    const arr = [10, 20, 30, 50, 100]

    return from(arr).pipe(
      concatMap(item => of(item).pipe(delay(1500)))
    )
  }
}
