import { CanActivateChild, CanLoad } from '@angular/router'

export default class Auth implements CanActivateChild, CanLoad {
    canLoad = () => this.canActivateChild(); // in this case it is the same auth, but it could be different

    canActivateChild (): boolean {
      if (localStorage.getItem('loggedIn')?.toLocaleLowerCase() !== 'true') {
        throw new Error('You are not authorized')
      }
      return true
    }
}
