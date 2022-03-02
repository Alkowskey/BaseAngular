import { Action } from '@ngrx/store'
import { Organization } from '../models/organization.model';


export const ADD_ORGANIZATION       = '[ORGANIZATION] Add'
export const REMOVE_ORGANIZATION    = '[ORGANIZATION] Remove'

export class AddOrganization implements Action {
    readonly type = ADD_ORGANIZATION 

    constructor(public payload: Organization) {}
}

export class RemoveOrganization implements Action {
    readonly type = REMOVE_ORGANIZATION

    constructor(public payload: number) {}
}

export type Actions = AddOrganization | RemoveOrganization