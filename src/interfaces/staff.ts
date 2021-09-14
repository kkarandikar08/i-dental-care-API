import {StaffDescription} from "../enums/staff-description";
import {Person} from "./Person";

export interface Staff {
    id: string;
    person: Person;
    description: StaffDescription;
    clinicId: string;
}
