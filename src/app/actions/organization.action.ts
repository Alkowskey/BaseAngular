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

export class UpdateOrganizationName {
  static readonly type = '[Organization] Update name'
  constructor (public organizationId: number, public name: string) {}
}

export class AddEmployee {
  static readonly type = '[Employee] Add'
  constructor (public payload: Employee) {}
}

export class AddEmployeeWithNewOrganization {
  static readonly type = '[Employee] Add with new organization'
  constructor (public emp: Employee, public organization: Organization) {}
}
