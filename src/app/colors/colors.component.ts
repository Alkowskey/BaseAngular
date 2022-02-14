import { Component, OnInit } from '@angular/core'
import { BehaviorSubject, catchError, of, switchMapTo, Observable, startWith, Subject, MonoTypeOperatorFunction, pipe, switchMap, endWith, filter, combineLatest, scan } from 'rxjs'
import { ColorsService } from '../services/colors.service'
import { share } from 'rxjs/operators'

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.sass']
})
export class ColorsComponent implements OnInit {
  readonly refresh$ = new BehaviorSubject<null>(null);
  readonly remove$ = new Subject<string>();
  readonly add$ = new Subject<string>();
  readonly items$ = this.refresh$.pipe(
    switchMapTo(this.colorsService.getColors().pipe(
      catchError(() => of(null))
    ))
    // share moze
  )

  readonly colors$ = this.items$.pipe(
    filter(Boolean),
    switchMap(items => combineLatest([
      this.addition$,
      this.removal$
    ]).pipe(
      scan(
        (result, [add,
          remove
        ]) => result.concat(add).filter(item => item !== remove),
        items
      ),
      startWith(items)
    )),
    startWith([]),
    share()
  );

  private readonly addition$ = this.add$.pipe(
    wrap(this.colorsService.addColor)
  )

  private readonly removal$ = this.remove$.pipe(
    wrap(this.colorsService.removeColor)
  )

  name = '';
  constructor (private colorsService: ColorsService) { }

  ngOnInit (): void {
  }
}
function wrap<T> (
  func: (item: T) => Observable<T>
): MonoTypeOperatorFunction<any> {
  return pipe(
    switchMap((item: T) => func(item).pipe(
      endWith(null),
      catchError(() => of(null))
    )),
    startWith(null)
  )
}
