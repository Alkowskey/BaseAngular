import { Observable } from 'rxjs'
import { Organization } from './app/models/organization.model'
import { Employee } from './app/models/employee.model'
export interface PersonInput {
    id: number;
    firstName: string;
    lastName: string;
    phone: string;
    address: string;
    message: string;
}

export interface Wind {
    direction: string;
    speed: number;
}

export interface Data {
    timepoint: number;
    cloudcover: number;
    seeing: number;
    transparency: number;
    lifted_index: number;
    rh2m: number;
    wind10m: Wind;
    temp2m: number;
    prec_type: string;
}

export interface Weather {
    product: string;
    init: string;
    dataseries: Data[] | undefined;
}

export interface IAutoSave{
    darkMode: boolean,
    toggle: boolean
}

export interface IWeatherAPI{
    getWeather (): Observable<Weather>;
    countByDirection (arr: Pick<Data, 'wind10m'>[] | undefined, val: string): number;
    groupWind (): Observable<Map<string, number>>;
}

export interface OrganizationEmp extends Organization {
    emps: Employee[]
}
