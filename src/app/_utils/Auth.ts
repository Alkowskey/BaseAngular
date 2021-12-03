import { CanActivate } from "@angular/router";

export default class Auth implements CanActivate {
    canActivate(): boolean {
        if (localStorage.getItem("loggedIn")?.toLocaleLowerCase() !== "true") {
            throw new Error("You are not authorized");
        }
        return true;
    }
}