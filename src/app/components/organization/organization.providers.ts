import { InjectionToken, Provider } from '@angular/core'
import { Observable, switchMap } from 'rxjs'
import { Organization } from '../../../interfaces'
import { ActivatedRoute } from '@angular/router'
import { OrganizationService } from '../../services/organization.service'

// Token that can be injected using @Inject decorator
export const ORGANIZATION_INFO = new InjectionToken<Observable<Organization>>(
  'Organization informations'
)

export const ORGANIZATION_PROVIDERS: Provider[] = [
  {
    provide: ORGANIZATION_INFO,
    deps: [ActivatedRoute, OrganizationService],
    useFactory: orgFactory
  }
]

export function orgFactory (
  { params }: ActivatedRoute,
  organizationService: OrganizationService
): Observable<Organization> {
  return params.pipe(
    switchMap((params) => {
      const id: number = params['id']

      return organizationService.getOrganizationById$(id)
    })
  )
}
