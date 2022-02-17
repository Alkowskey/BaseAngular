import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { OrganizationService } from 'src/app/services/organization.service'
import { Observable } from 'rxjs'
import { Organization } from 'src/interfaces'
import { switchMap } from 'rxjs/operators'

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.sass']
})
export class OrganizationComponent implements OnInit {
  readonly organization$: Observable<Organization> = this.activatedRoute.params.pipe(
    switchMap(params => {
      const id: number = params['id'] // has to be this notation - disable eslint rule
      console.log('id: ', id)
      return this.organizationService.getOrganizationById$(id)
    })
  );

  constructor (
    private readonly activatedRoute: ActivatedRoute,
    private readonly organizationService: OrganizationService
  ) { }

  ngOnInit (): void {

  }
}
