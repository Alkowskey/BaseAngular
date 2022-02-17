
import { ChangeDetectionStrategy, Component } from '@angular/core'
import { BehaviorSubject, MonoTypeOperatorFunction, Observable, Subject, combineLatest, merge, of, pipe } from 'rxjs'
import { catchError, endWith, filter, first, mapTo, scan, share, startWith, switchMap, switchMapTo } from 'rxjs/operators'
import { UserService } from '../../services/user.service'

@Component({
  selector: 'app-users-tab',
  templateUrl: './users-tab.component.html',
  styleUrls: ['./users-tab.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersTabComponent {
    // Using Subjects to initiate async operations
    readonly remove$ = new Subject<string>();
    readonly add$ = new Subject<string>();
    // BehaviorSubject to kickstart the loading
    readonly refresh$ = new BehaviorSubject<null>(null);

    // Refresh
    private readonly items$ = this.refresh$.pipe(
      switchMapTo(this.userService.getUsers().pipe(
        // null instead of EMPTY so we know when to end loading
        catchError(() => of(null))
      )),
      // Sharing it because we will use it in mutliple streams
      share()
    )

    // Remove
    private readonly removal$ = this.remove$.pipe(
      wrap(this.userService.removeUser)
    )

    // Add
    private readonly addition$ = this.add$.pipe(
      wrap(this.userService.addUser)
    )

    readonly users$ = this.items$.pipe(
      // Keep previous result in case of refresh error
      filter(Boolean),
      // Listen to add/remove actions on the list
      switchMap(items => combineLatest([
        this.addition$,
        this.removal$
      ]).pipe(
        // You can add null checks to get rid of extra
        // iterations in case your lists are big
        scan(
          (result, [add, remove]) => result.concat(add).filter(item => item !== remove),
          items
        ),
        // Starting with refresh result
        startWith(items)
      )),
      // Starting with empty array so there's always something
      startWith([]),
      // Sharing it because we will use it in mutliple streams
      share()
    );

    readonly loading$ = loading([
      this.add$, // Start on add request
      this.remove$, // Start on remove request
      this.refresh$ // Start on refresh request
    ], [
      this.items$, // End on refresh result
      this.users$ // End on add/remove results
    ]);

    name = '';

    constructor (private readonly userService: UserService) {}

    isDisabled (users: readonly string[]): boolean {
      return !this.name || users.includes(this.name)
    }
}

// A little helper for the loading state
// Remember to add share() to Observables
// that are used to end loading
function loading (
  start: readonly Observable<unknown>[],
  finish: readonly Observable<unknown>[]
) {
  // Listen to all triggers
  return merge(...start).pipe(
    switchMapTo(
      // Wait for result
      merge(...finish).pipe(
        // We only need first result
        first(),
        // End loading upon emit
        mapTo(false),
        // Start loading immediately
        startWith(true)
      )
    )
  )
}

// A little helper for add/remove operations
// to be used with "combineLatest" later
function wrap<T> (
  func: (item: T) => Observable<T>
): MonoTypeOperatorFunction<any> {
  return pipe(
    // Switch to actual operation
    switchMap((item: T) => func(item).pipe(
      // Remove item from upcoming "combineLatest" emits
      endWith(null),
      // null and not EMPTY so we can stop loading upon error
      catchError(() => of(null))
    )),
    // Kickstart "combineLatest"
    startWith(null)
  )
}
