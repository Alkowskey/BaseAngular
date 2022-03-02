import { Action } from '@ngrx/store'
import * as OrganizationActions from './../actions/organization.actions'
import { Organization } from '../models/organization.model';
import { AppState } from '../app.state';

export interface OrganizationState{
    organizations: Organization[];
}

const initialState: OrganizationState = {
    organizations: [
        { id: 0, name: 'Organization 1', size: 32 },
        { id: 1, name: 'Organization 2', size: 16 },
        { id: 2, name: 'Organization 3', size: 256 }
    ]
};

export function organizationReducer(state: OrganizationState = initialState, action: OrganizationActions.Actions): OrganizationState {

    switch(action.type) {
        case OrganizationActions.ADD_ORGANIZATION:
            state.organizations.push(action.payload);
            return state;
        default:
            return state;
    }
}