import { ChangeDetectionStrategy, Component, OnInit, Inject } from '@angular/core'
import { Observable } from 'rxjs'
import { ORGANIZATION_PROVIDERS, ORGANIZATION_INFO } from './organization.providers'
import { Organization } from '../../models/organization.model'
import { Select, Store } from '@ngxs/store'
import { OrganizationState } from '../../organization.state'
import { AddOrganization, UpdateOrganizationName, AddEmployeeWithNewOrganization } from '../../actions/organization.action'
import { OrganizationEmp } from 'src/interfaces'

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.sass'],
  providers: [ORGANIZATION_PROVIDERS],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrganizationComponent implements OnInit {
  @Select(OrganizationState.organizations)
    organizations!: Observable<Organization[]>

  @Select(OrganizationState.getOrganizationWithEmps)
    organizationsEmps!: Observable<OrganizationEmp[]>

  constructor (
    @Inject(ORGANIZATION_INFO) readonly organization$: Observable<Organization>,
    private store: Store
  ) { }

  ngOnInit (): void {
    this.organizationsEmps.subscribe(console.table)

    this.store.dispatch(new AddOrganization({ id: 10, enabled: true, name: 'Nowa org', size: 32 }))
    this.store.dispatch(new UpdateOrganizationName(10, 'Updated Name'))

    this.store.dispatch(new AddEmployeeWithNewOrganization({ id: 1231, name: 'temp', organizationId: 20, surname: 'temp surname' }, { id: 20, enabled: true, name: 'temp', size: 312 }))
  }
}
