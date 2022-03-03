import { Injectable, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { of, Observable, map } from 'rxjs';
import { Organization } from '../models/organization.model';
import { OrganizationState } from '../reducers/organization.reducer';
import { AppState } from '../reducers/index';
import { filter } from 'rxjs/operators';
import { AddOrganization } from '../actions/organization.actions';

let ORGANIZATIONS: Observable<Organization[]>;
@Injectable({
  providedIn: 'root'
})
export class OrganizationService {
  constructor (private store: Store<AppState>) {
    ORGANIZATIONS = this.store.select((store) => store.organizationList)
   }
  getOrganizationById$ (id: number): Observable<Organization | undefined> {
    const organization = ORGANIZATIONS.pipe(
      map(organizationList => organizationList.find(x=>id == x.id)) // WTF, didn't work with === instead of == lol
    )
    organization.subscribe(console.table)
    return organization;
  }
}
