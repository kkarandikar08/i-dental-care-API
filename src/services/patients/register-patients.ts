import createPatientQuery from "../../database/queries/create-patient";
import {insertData, readData} from "../../database/database-controller";
import {Patient} from "../../interfaces/Patient";

const registerPatients = (async (req: any, res: any) => {
    const patient: Patient = req.body;
    const data = [
        patient.person.id,
        patient.person.firstName,
        patient.person.lastName,
        patient.person.phoneNumber,
        patient.person.street1,
        patient.person.street2,
        patient.person.city,
        patient.person.state,
        patient.person.zipCode,
        patient.person.gender,
        new Date(patient.person.dateOfBirth),
        patient.id,
        patient.medicalHistory,
        patient.medicationList,
        JSON.stringify(patient.documents),
        patient.clinicId,
        patient.dentistId
    ]
    try {
        const response = await insertData(data, createPatientQuery);

        res.json(response);
    } catch (e) {
        res.json(e);
    }

})

export default registerPatients;


