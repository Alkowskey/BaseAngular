import { DOCUMENT } from '@angular/common'
import { Inject, Injectable } from '@angular/core'
import { distinctUntilChanged, fromEvent, map, Observable, share, startWith } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class PageVisibilityService {
  constructor (@Inject(DOCUMENT) private document: Document) { }

  isVisible (): Observable<Boolean> {
    return fromEvent(document, 'visibilitychange').pipe(
      startWith(0),
      map(() => document.visibilityState !== 'hidden'),
      distinctUntilChanged(),
      share()
    )
  }
}
