import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { PersonInput } from '../../interfaces';
export const isValidFirstName = (): ValidatorFn => {
    return (control: AbstractControl): ValidationErrors | null =>
        control.value?.length > 0
            ? null : { strLen: control.value.length };
}

export const isValidPhone = (): ValidatorFn => {
    return (control: AbstractControl): ValidationErrors | null => {
        const isValid = /^\+?[0-9]{3}-?[0-9]{6,12}$/.test(control.value)

        return !isValid ? { forbiddenPhone: { value: control.value } } : null
    }

};
