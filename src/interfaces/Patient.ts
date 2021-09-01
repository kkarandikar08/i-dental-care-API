import {Person} from "./Person";

export interface Patient {
    id: string;
    person: Person;
    medicalHistory: string;
    medicationList: string;
    documents: any;
    clinicId: string;
    dentistId: string;
}
