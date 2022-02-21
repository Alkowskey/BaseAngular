import { Injectable } from '@angular/core'
import { IAutoSave } from 'src/interfaces'
import { Observable, of } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AutosaveServiceService {
  constructor () { }
  save (formValue: IAutoSave): Observable<string> {
    const today = new Date().toISOString()
    return of(`${today} darkMode: ${formValue.darkMode}: toggle: ${formValue.toggle}`)
  }
}
