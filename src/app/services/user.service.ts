import { Injectable } from '@angular/core'
import { Observable, defer, timer } from 'rxjs'
import { map } from 'rxjs/operators'

let USERS = ['John', 'Jane', 'Jack', 'Jill']

@Injectable({
  providedIn: 'root'
})
export class UserService {
  getUsers (): Observable<string[]> {
    return defer(() => {
      const delay = Math.round(Math.random() * 3000)

      console.log('getting users', !(delay % 2))

      return timer(delay).pipe(
        map(() => {
          if (delay % 2) {
            throw new Error('Server request failed')
          }

          return [...USERS]
        })
      )
    })
  }

  addUser (user: string): Observable<string> {
    const delay = Math.round(Math.random() * 3000)

    console.log('adding user', !(delay % 2))

    return timer(delay).pipe(
      map(() => {
        if (delay % 2) {
          throw new Error('Server request failed')
        }

        USERS.push(user)

        return user
      })
    )
  }
  //

  removeUser (user: string): Observable<string> {
    const delay = Math.round(Math.random() * 3000)

    console.log('removing user', !(delay % 2))

    return timer(delay).pipe(
      map(() => {
        if (delay % 2) {
          throw new Error('Server request failed')
        }

        USERS = USERS.filter(item => item !== user)

        return user
      })
    )
  }
}
