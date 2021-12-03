import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PersonInput } from '../../interfaces';
import { isValidPerson } from '../_validation/PersonValidation';

@Component({
  selector: 'app-admin-api',
  templateUrl: './admin-api.component.html',
  styleUrls: ['./admin-api.component.sass']
})
export class AdminAPIComponent implements OnInit {
  data: Array<PersonInput> = [
    { id: 1, firstName: "Alek", lastName: "Kulinski", phone: "123123123", address: "Krk", message: "" },
    { id: 2, firstName: "Przemek", lastName: "Asdd", phone: "123123123", address: "Krk", message: "" },
  ]
  formGroup = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    phone: new FormControl(''),
    address: new FormControl(''),
    message: new FormControl(''),
  })
  //Zmień validatory
  //Dodaj guarda

  onSubmit(): void {
    const person: PersonInput = this.formGroup.value;
    //Validate via form
    //FormGroup.valid
    if (!isValidPerson(person)) {
      throw new Error("person data is not valid");
    }
    console.log(this.formGroup.value);
  }

  constructor(private route: ActivatedRoute) {

  }

  setForm(person: PersonInput): void {
    this.formGroup.patchValue({
      ...person
    })
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    const person = this.data.find(p => p.id === Number(id));
    if (person)
      this.setForm(person);
  }

}
