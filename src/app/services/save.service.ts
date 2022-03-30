import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class SaveService {
  constructor () { }

  saveToApi (input: string): Boolean {
    console.log(input)
    return true
  }

  trim (input: string): string {
    return input.replace(/  +/g, ' ')
  }
}
