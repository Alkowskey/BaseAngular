import { Injectable } from '@angular/core'
import { Action, Selector, State, StateContext } from '@ngxs/store'
import { AddOrganization } from './actions/organization.action'
import { Employee } from './models/employee.model'
import { Organization } from './models/organization.model'

export class OrganizationsStateModel {
  organizations: Organization[] = []
  emps: Employee[] = []
}
const ORGANIZATIONS: Organization[] = [
  { id: 0, name: 'Organization 1', size: 32 },
  { id: 1, name: 'Organization 2', size: 16 },
  { id: 2, name: 'Organization 3', size: 256 }
]

const EMPS: Employee[] = [
  { id: 0, name: 'Alek', surname: 'ASd', organizationId: 0 },
  { id: 0, name: 'Alek', surname: 'ASd', organizationId: 1 }
]
@State<OrganizationsStateModel>({
  name: 'organizations',
  defaults: {
    organizations: ORGANIZATIONS,
    emps: EMPS
  }
})
@Injectable()
export class OrganizationState {
  @Selector()
  static organizations (state: OrganizationsStateModel) {
    return state.organizations
  }

  @Selector()
  static emps (state: OrganizationsStateModel) {
    return state.emps
  }

  @Action(AddOrganization)
  addOrganization (ctx: StateContext<OrganizationsStateModel>, action: AddOrganization) {
    const state = ctx.getState()
    const organization = action.payload
    ctx.patchState({
      organizations: [...state.organizations, organization]
    })
  }
}
