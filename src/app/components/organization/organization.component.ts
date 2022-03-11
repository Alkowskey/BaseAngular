import { ChangeDetectionStrategy, Component, OnInit, Inject } from '@angular/core'
import { Observable } from 'rxjs'
import { ORGANIZATION_PROVIDERS, ORGANIZATION_INFO } from './organization.providers'
import { Organization } from '../../models/organization.model'
import { Select } from '@ngxs/store'
import { OrganizationState } from '../../organization.state'

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

  constructor (
    @Inject(ORGANIZATION_INFO) readonly organization$: Observable<Organization>
  ) { }

  ngOnInit (): void {
    this.organizations.subscribe(console.table)
  }
}
