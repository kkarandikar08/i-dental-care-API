import {Gender} from "../enums/gender";

export interface Person {
    id: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    street1: string;
    street2: string;
    city: string;
    state: string;
    zipCode: string;
    gender: Gender;
    dateOfBirth: Date;
}
