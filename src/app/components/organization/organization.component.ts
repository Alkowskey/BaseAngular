import { ChangeDetectionStrategy, Component, OnInit, Inject } from '@angular/core'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { Organization } from 'src/interfaces'
import { ORGANIZATION_PROVIDERS, ORGANIZATION_INFO } from './organization.providers'
import { AddOrganization } from '../../organization.actions'
import { OrganizationsState } from '../../organization.state'

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.sass'],
  providers: [ORGANIZATION_PROVIDERS],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrganizationComponent implements OnInit {
  constructor (
    @Inject(ORGANIZATION_INFO) readonly organization$: Observable<Organization>,
    private orgState: OrganizationsState,
    private store: Store
  ) { }

  ngOnInit (): void {
    console.log(this.store)
    this.store.dispatch(new AddOrganization({}))
  }
}
