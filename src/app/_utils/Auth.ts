import { CanActivateChild } from '@angular/router';

export default class Auth implements CanActivateChild {
    canActivateChild(): boolean {
        if (localStorage.getItem("loggedIn")?.toLocaleLowerCase() !== "true") {
            throw new Error("You are not authorized");
        }
        return true;
    }
}