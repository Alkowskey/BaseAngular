import { FormGroup } from '@angular/forms'
import { MonoTypeOperatorFunction } from 'rxjs'
export class CustomFormGroup extends FormGroup {
  public setCallbackForAll (op: MonoTypeOperatorFunction<any>, cb: (a: any) => void): void { // don't like the any type
    Object.keys(this.controls).forEach((key) => {
      this.get(key)?.valueChanges.pipe(op).subscribe(cb)
    })
  }
}
