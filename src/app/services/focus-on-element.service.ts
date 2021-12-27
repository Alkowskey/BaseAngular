import { DOCUMENT } from '@angular/common'
import { Inject, Injectable } from '@angular/core'
import { debounceTime, distinctUntilChanged, fromEvent, map, merge, of } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class FocusOnElementService {
  constructor (
    @Inject(DOCUMENT) document: Document
  ) {
  }

  finals (el: HTMLElement) {
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
