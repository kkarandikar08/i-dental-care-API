import {Person} from "./Person";
import {Specialization} from "../enums/specialization";

export interface Dentist {
    id: string;
    person: Person;
    clinicId: string;
    specialization: Specialization;
}
