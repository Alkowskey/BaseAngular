import { Organization } from '../models/organization.model'
import { Employee } from '../models/employee.model'

export class AddOrganization {
  static readonly type = '[Organization] Add'
  constructor (public payload: Organization) {}
}

export class EnableOrganization {
  static readonly type = '[Organization] Enable'
  constructor (public organizationId: number, public enabled: boolean) {}
}

export class AddEmployee {
  static readonly type = '[Employee] Add'
  constructor (public payload: Employee) {}
}
