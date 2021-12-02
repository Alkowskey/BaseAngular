import { PersonInput } from '../../interfaces';
export const isValidFirstName = (firstName: string): boolean => firstName?.length > 0;

export const isValidPhone = (phone: string): boolean => /^\+?[0-9]{3}-?[0-9]{6,12}$/.test(phone);

export const isValidPerson = (person: PersonInput) => {
    const {firstName, phone} = person;
    if(!isValidFirstName(firstName)) return false;
    if(!isValidPhone(phone)) return false;

    return true;
}
