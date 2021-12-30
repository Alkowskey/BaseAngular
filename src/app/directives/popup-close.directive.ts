import { DOCUMENT } from '@angular/common'
import { Directive, Inject, Output, ElementRef } from '@angular/core'
import { filter, fromEvent, merge, Observable, switchMapTo, take } from 'rxjs'

@Directive({
  selector: '[popupClose]'
})
export class PopupCloseDirective {
  @Output()
  popupClose: Observable<unknown>;

  constructor (
    @Inject(ElementRef) { nativeElement }: ElementRef<HTMLElement>,
    @Inject(DOCUMENT) documentRef: Document
  ) {
    const esc$: Observable<unknown> = fromEvent<KeyboardEvent>(
      documentRef,
      'keydown'
    ).pipe(filter(({ key }) => {
      return key === 'Escape'
    }))

    const clickOutside$ = fromEvent<MouseEvent>(documentRef, 'mousedown').pipe(
      filter(
        ({ target }) => {
          return target instanceof Element && !nativeElement.contains(target)
        }
      ),
      switchMapTo(
        fromEvent<MouseEvent>(documentRef, 'mouseup').pipe(
          take(1),
          filter(
            ({ target }) =>
              target instanceof Element && !nativeElement.contains(target)
          )
        )
      )
    )

    this.popupClose = merge(clickOutside$, esc$)
  }
}
