import { Organization } from '../models/organization.model'
import { Employee } from '../models/employee.model'

export class AddOrganization {
  static readonly type = '[Organization] Add'
  constructor (public payload: Organization) {}
}

export class AddEmployee {
  static readonly type = '[Employee] Add'
  constructor (public payload: Employee) {}
}
