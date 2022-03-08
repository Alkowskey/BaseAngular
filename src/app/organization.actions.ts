import { Organization } from '../interfaces'
export class AddOrganization {
  static readonly type = '[Organization] Add Organization'
  constructor (public organization: Organization) {}
}
