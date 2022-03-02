import { Injectable } from '@angular/core'
import { Organization } from 'src/interfaces'
import { of, Observable } from 'rxjs'

const ORGANIZATIONS: Organization[] = [
  { id: 0, name: 'Organization 1', size: 32 },
  { id: 1, name: 'Organization 2', size: 16 },
  { id: 2, name: 'Organization 3', size: 256 }]
@Injectable({
  providedIn: 'root'
})
export class OrganizationService {
  constructor () { }

  getOrganizationById$ (id: number): Observable<Organization> {
    return of(ORGANIZATIONS[id])
  }
}
