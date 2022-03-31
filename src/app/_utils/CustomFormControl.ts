import { AbstractControlOptions, FormControl, ValidatorFn, AsyncValidatorFn } from '@angular/forms'
export class CustomFormControl extends FormControl {
  disabledByUser: boolean = false
  constructor (formState?: any, validatorOrOpts?: ValidatorFn | ValidatorFn[] | AbstractControlOptions | null, { disabledByUser }: any = { disabledByUser: false }, asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null) {
    super(formState, validatorOrOpts, asyncValidator)
    this.disabledByUser = disabledByUser
  }
}
