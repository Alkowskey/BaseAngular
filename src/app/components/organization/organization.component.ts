import { ChangeDetectionStrategy, Component, OnInit, Inject } from '@angular/core'
import { Observable } from 'rxjs'
import { ORGANIZATION_PROVIDERS, ORGANIZATION_INFO } from './organization.providers'
import { AddOrganization } from '../../actions/organization.action'
import { Organization } from '../../models/organization.model'
import { Select, Store } from '@ngxs/store'
import { OrganizationState } from '../../organization.state'
import { Employee } from '../../models/employee.model'

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.sass'],
  providers: [ORGANIZATION_PROVIDERS],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrganizationComponent implements OnInit {
  @Select(OrganizationState.organizations)
    organizations: Observable<Organization[]> | undefined

  @Select(OrganizationState.emps)
    emps: Observable<Employee[]> | undefined

  @Select(OrganizationState.enabledOrganizations)
    enabledOrganizations: Observable<Organization[]> | undefined

  constructor (
    @Inject(ORGANIZATION_INFO) readonly organization$: Observable<Organization>,
    private store: Store
  ) { }

  ngOnInit (): void {
    this.enabledOrganizations?.subscribe(console.table)
    this.emps?.subscribe(console.table)
    this.store.dispatch(new AddOrganization({ id: 1, name: 'test', size: 32, enabled: true }))
    console.log(this.store)
  }
}
