import { DOCUMENT } from '@angular/common'
import { Directive, Inject, Output, ElementRef, HostListener } from '@angular/core'
import { filter, fromEvent, merge, Observable, switchMapTo, take } from 'rxjs'
import { ModalService } from '../services/modal.service'

@Directive({
  selector: '[popupClose]'
})
export class PopupCloseDirective {
  @Output()
  popupClose: Observable<unknown>;

  @HostListener('document:keydown.escape', ['$event'])
  onEscDown () {
    this.modal$$.next(null)
  }

  constructor (
    @Inject(ElementRef) { nativeElement }: ElementRef<HTMLElement>,
    @Inject(DOCUMENT) documentRef: Document,
    readonly modal$$: ModalService
  ) {
    const esc$: Observable<unknown> = fromEvent<KeyboardEvent>(
      documentRef,
      'keydown'
    ).pipe(filter(({ key }) => {
      return key === 'Shift' // wanted to change it to random key to compare two ways
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
