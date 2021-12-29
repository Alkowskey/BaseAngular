import { DOCUMENT } from '@angular/common'
import { Directive, Inject, Output, ElementRef } from '@angular/core'
import { filter, fromEvent, merge, Observable, switchMapTo, take } from 'rxjs'

@Directive({
  selector: '[appPopupClose]'
})
export class PopupCloseDirective {
  @Output()
  modalClose: Observable<unknown>;

  constructor (
    @Inject(ElementRef) { nativeElement }: ElementRef<HTMLElement>,
    @Inject(DOCUMENT) documentRef: Document
  ) {
    console.log('TEST')
    const esc$: Observable<unknown> = fromEvent<KeyboardEvent>(
      documentRef,
      'keydown'
    ).pipe(filter(({ key }) => key === 'Escape'))

    const clickOutside$ = fromEvent<MouseEvent>(documentRef, 'mousedown').pipe(
      filter(
        ({ target }) =>
          target instanceof Element && !nativeElement.contains(target)
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

    this.modalClose = merge(clickOutside$, esc$)
  }
}
