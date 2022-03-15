/* eslint-disable eqeqeq */
/* eslint-disable no-use-before-define */
import { Injectable } from '@angular/core'
import { Action, Selector, State, StateContext } from '@ngxs/store'
import { AddOrganization, EnableOrganization, UpdateOrganizationName } from './actions/organization.action'
import { Employee } from './models/employee.model'
import { Organization } from './models/organization.model'
import { append, patch, updateItem } from '@ngxs/store/operators'

export class OrganizationsStateModel {
  organizations: Organization[] = []
  emps: Employee[] = []
}
const ORGANIZATIONS: Organization[] = [
  { id: 0, name: 'Organization 1', size: 32, enabled: true },
  { id: 1, name: 'Organization 2', size: 16, enabled: false },
  { id: 2, name: 'Organization 3', size: 256, enabled: false }
]
const EMPS: Employee[] = [
  { id: 0, name: 'Test1', surname: 'Test1', organizationId: 0 },
  { id: 0, name: 'Test2', surname: 'Test2', organizationId: 1 }
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

  @Selector([OrganizationState])
  static enabledOrganizations (state: OrganizationsStateModel) {
    return state.organizations.filter(x => x.enabled)
  }

  @Selector()
  static emps (state: OrganizationsStateModel) {
    return state.emps
  }

  @Selector([OrganizationState.enabledOrganizations])
  static getEnabledOrganizations (data: Organization[]) {
    return data.map(d => d.name + 'getEnabledOrg')
  }

  @Selector()
  static getOrganizationById (state: OrganizationsStateModel) {
    return (index: number) => { // <--- Return a function from select
      return state.organizations.find(org => org.id == index)
    }
  }

  @Action(AddOrganization)
  addOrganization (ctx: StateContext<OrganizationsStateModel>, action: AddOrganization) {
    const organization = action.payload
    ctx.setState(
      patch({
        organizations: append([organization])
      })
    )
  }

  @Action(UpdateOrganizationName)
  updateOrganizationName (ctx: StateContext<OrganizationsStateModel>, { organizationId, name }: UpdateOrganizationName) {
    ctx.setState(
      patch({
        organizations: updateItem<Organization>(x => x?.id === organizationId, patch({ name: name }))
      })
    )
  }

  @Action(EnableOrganization)
  enableOrganization (ctx: StateContext<OrganizationsStateModel>, { enabled, organizationId }: EnableOrganization) {
    ctx.setState(
      patch({
        organizations: updateItem<Organization>(x => x?.id === organizationId, patch({ enabled }))
      })
    )
  }
}
