import { ActionReducerMap } from '@ngrx/store';
import { organizationReducer, OrganizationState } from './organization.reducer';
import { Organization } from '../models/organization.model';


export const rootReducer = {};

export interface AppState {
    organizationList: Organization[];
};


export const reducers: ActionReducerMap<AppState, any> = {
    organizationList: organizationReducer
};