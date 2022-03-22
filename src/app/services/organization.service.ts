import { Injectable } from '@angular/core'
import { Store } from '@ngxs/store'
import { Observable, map } from 'rxjs'
import { Organization } from '../models/organization.model'
import { OrganizationState } from '../organization.state'

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {
  constructor (private store: Store) { }

  getOrganizationById$ (id: number): Observable<Organization | undefined> {
    return this.store.select(OrganizationState.getOrganizationById).pipe(map(filterFn => filterFn(id)))
  }
}
