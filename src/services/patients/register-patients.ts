import createPersonQuery from "../../database/sql/queries/create-person";
import {insertData} from "../../database/database-controller";

const registerPatients = (async (req: any, res: any) => {
    const data = req.body;
    try {
        const response = await insertData([
            data.id, data.firstName, data.lastName, data.phoneNumber, data.street1, data.street2,
            data.city, data.state, data.zipCode, JSON.stringify(data.documents), data.gender,
            new Date(data.dateOfBirth), data.medicalHistory, data.medicationList
        ], createPersonQuery);
        res.json(response);
    } catch (e) {
        res.json(e);
    }

})

export default registerPatients;
