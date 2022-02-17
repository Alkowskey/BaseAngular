import { Component, Inject, Input, ElementRef } from '@angular/core'
import { fromEvent, Observer, repeatWhen, takeUntil, tap, timer } from 'rxjs'

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.sass']
})
export class NotificationComponent<T> {
  @Input()
  observer: Observer<T> | null = null;

  readonly mouseenter$ = fromEvent(this.elementRef.nativeElement, 'mouseenter');

  readonly mouseleave$ = fromEvent(this.elementRef.nativeElement, 'mouseleave');

  readonly close$ = timer(3000).pipe(
    takeUntil(this.mouseenter$),
    repeatWhen(() => this.mouseleave$),
    tap(this.close.bind(this))
  );

  constructor (
    @Inject(ElementRef) private readonly elementRef: ElementRef<HTMLElement>
  ) {}

  close () {
    this.observer?.complete()
  }
}
