import { Action } from '@ngrx/store'
import * as OrganizationActions from './../actions/organization.actions'
import { Organization } from '../models/organization.model';
import { AppState } from '../app.state';

export interface OrganizationState{
    organizations: Organization[];
}

const initialState: Organization[] = [
    { id: 0, name: 'Organization 1', size: 32 },
    { id: 1, name: 'Organization 2', size: 16 },
    { id: 2, name: 'Organization 3', size: 256 }
];

export function organizationReducer(state: Organization[] = initialState, action: OrganizationActions.Actions): Organization[] {

    switch(action.type) {
        case OrganizationActions.ADD_ORGANIZATION:
            return [...state, action.payload];
        default:
            return state;
    }
}