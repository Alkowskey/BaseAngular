import { DOCUMENT } from '@angular/common'
import { Inject, Injectable } from '@angular/core'
import { debounceTime, distinctUntilChanged, fromEvent, map, merge, of, Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class FocusOnElementService {
  constructor (
    @Inject(DOCUMENT) document: Document
  ) {
  }

  trackSelect (el: HTMLElement): Observable<Element|null> {
    return merge(
      fromEvent(document, 'focusin'),
      fromEvent(document, 'focusout'),
      of(null)
    ).pipe(
      debounceTime(0),
      map(() =>
        el.contains(document.activeElement)
          ? document.activeElement
          : null
      ),
      distinctUntilChanged()
    )
  }
}
