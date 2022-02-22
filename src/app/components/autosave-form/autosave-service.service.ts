import { Injectable } from '@angular/core'
import { IAutoSave } from 'src/interfaces'

@Injectable({
  providedIn: 'root'
})
export class AutosaveServiceService {
  constructor () { }
  save (formValue: IAutoSave): string {
    const today = new Date().toISOString()
    return `${today} darkMode: ${formValue.darkMode}: toggle: ${formValue.toggle}`
  }
}
