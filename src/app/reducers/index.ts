import { ActionReducerMap } from '@ngrx/store';
import { organizationReducer, OrganizationState } from './organization.reducer';


export const rootReducer = {};

export interface AppState {
    shoppingList: OrganizationState;
};


export const reducers: ActionReducerMap<AppState, any> = {
    shoppingList: organizationReducer
};