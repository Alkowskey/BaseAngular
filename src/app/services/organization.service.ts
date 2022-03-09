import { Injectable } from '@angular/core'
import { of, Observable } from 'rxjs'
import { Organization } from '../models/organization.model'

const ORGANIZATIONS: Organization[] = [
  { id: 0, name: 'Organization 1', size: 32, enabled: true },
  { id: 1, name: 'Organization 2', size: 16, enabled: false },
  { id: 2, name: 'Organization 3', size: 256, enabled: false }]
@Injectable({
  providedIn: 'root'
})
export class OrganizationService {
  constructor () { }

  getOrganizationById$ (id: number): Observable<Organization> {
    return of(ORGANIZATIONS[id])
  }
}
