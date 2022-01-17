import { DOCUMENT } from '@angular/common'
import { Component, Inject, OnInit } from '@angular/core'
import { map, Observable, pairwise, scan } from 'rxjs'

@Component({
  selector: 'app-fps-counter',
  templateUrl: './fps-counter.component.html',
  styleUrls: ['./fps-counter.component.sass']
})
export class FpsCounterComponent implements OnInit {
  constructor (@Inject(DOCUMENT) private readonly document: Document) { }

  readonly fps$ = animationFrame(this.document.defaultView).pipe(
    pairwise(), // emits previous and current value (⬇)
    scan((acc: number[], [prev, curr]) => { // Accumulator - maybe i could use reduce - gonna try later
      if (acc.push(1000 / (curr - prev)) > 60) {
        acc.shift()
      }
      return acc
    }, []),
    map((arr: number[]) => Math.round(arr.reduce((acc, curr) => acc + curr, 0) / arr.length))

  );

  ngOnInit (): void {
  }
}
export function animationFrame (view: Window | null): Observable<DOMHighResTimeStamp> { // Precise number used to describe time
  return new Observable(subscriber => {
    let id: number | undefined = NaN

    const callback = (timestamp: DOMHighResTimeStamp) => {
      subscriber.next(timestamp) // next - emits value to subscriber
      id = view?.requestAnimationFrame(callback)
    }

    id = view?.requestAnimationFrame(callback)

    return () => {
      view?.cancelAnimationFrame(id || 0)
    }
  })
}
