import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRoute, Router, ActivatedRouteSnapshot, CanActivateChild } from '@angular/router';

@Injectable({
    providedIn: "root",
})
export default class PermissionGuard implements CanActivate {
    constructor(private readonly router: Router) { }
    canActivate(route: ActivatedRouteSnapshot): boolean {
        const id = route.paramMap.get("id");
        if (Number(id) < 0) throw new Error("Unauthenticated");
        return true;
    }
}