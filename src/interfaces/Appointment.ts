import {TreatmentStatus} from "../enums/treatment-status";

export interface Appointment {
    id: string;
    startTime: Date;
    endTime: Date;
    patientId: string;
    dentistId: string;
    serviceId: string;
    status: TreatmentStatus;
    clinicId: string;
}
