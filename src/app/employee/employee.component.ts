import { Component, OnInit } from '@angular/core'
import { OrganizationState } from '../organization.state'
import { Observable } from 'rxjs'
import { Select, Store } from '@ngxs/store'
import { Employee } from '../models/employee.model'
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { AddEmployee } from '../actions/organization.action'

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.sass']
})
export class EmployeeComponent implements OnInit {
  @Select(OrganizationState.emps)
    Emps!: Observable<Employee[]>

  empForm = new FormGroup({
    id: new FormControl(0, [Validators.required, Validators.max(99)]),
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    surname: new FormControl('', [Validators.required, Validators.minLength(3)]),
    organizationId: new FormControl(0, Validators.required)
  })

  constructor (private store: Store) { }

  ngOnInit (): void {
    this.Emps.subscribe(console.table)
  }

  newEmp (): void {
    if (!this.empForm.valid) throw new Error('Form is not valid')
    const payload = this.empForm.value as Employee
    this.store.dispatch(new AddEmployee(payload))
  }
}
