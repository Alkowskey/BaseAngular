import { Organization } from './models/organization.model';

export interface AppState {
  readonly tutorial: Organization[];
}