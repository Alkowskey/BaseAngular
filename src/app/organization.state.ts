import { Injectable } from '@angular/core'
import { Action, State, StateContext } from '@ngxs/store'
import { Organization } from '../interfaces'
import { AddOrganization } from './organization.actions'

@State<Organization[]>({
  name: 'organizations',
  defaults: []
})
@Injectable()
export class OrganizationsState {
  @Action(AddOrganization)
  addOrganization (ctx: StateContext<Organization>, action: AddOrganization) {
    const state = ctx.getState()
    const org = action.organization
    ctx.patchState({
      ...state,
      ...org
    })
    ctx.dispatch(new AddOrganization({ id: 1, name: 'org 1', size: 32 }))
  }
}
