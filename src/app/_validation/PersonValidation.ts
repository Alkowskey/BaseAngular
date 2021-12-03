import { AbstractControl, AsyncValidatorFn, ValidationErrors, ValidatorFn } from '@angular/forms';
import { Observable, of } from 'rxjs';

//Just for the sake of playing with async
async function playAsync(firstname: string): Promise<ValidationErrors | null> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (firstname === "Marek") {
                const err = { forbiddenFirstname: { value: "Forbidden firstname" } };
                reject(err);
            }

            resolve(null);
        }, 1000);
    });
}

export class PersonValidation {
    static isValidPhone(control: AbstractControl): ValidationErrors | null {
        const isValid = /^\+?[0-9]{3}-?[0-9]{6,12}$/.test(control.value)

        return !isValid ? { forbiddenPhone: { value: control.value } } : null
    };

    static async isValidAsync(control: AbstractControl): Promise<ValidationErrors | null> {
        const reponse = await playAsync(control.value);
        return reponse
    }
}
