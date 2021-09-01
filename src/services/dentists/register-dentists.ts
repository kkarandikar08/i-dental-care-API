import {insertData} from "../../database/database-controller";
import createDentistQuery from "../../database/queries/create-dentist";
import {Dentist} from "../../interfaces/Dentist";


const registerDentists = (async (req: any, res: any) => {
    const dentist: Dentist = req.body;
    const data = [
        dentist.person.id,
        dentist.person.firstName,
        dentist.person.lastName,
        dentist.person.phoneNumber,
        dentist.person.street1,
        dentist.person.street2,
        dentist.person.city,
        dentist.person.state,
        dentist.person.zipCode,
        dentist.person.gender,
        new Date(dentist.person.dateOfBirth),
        dentist.id,
        dentist.clinicId,
        dentist.specialization
    ]
    try {
        const response = await insertData(data, createDentistQuery);

        res.json(response);
    } catch (e) {
        res.json(e);
    }

})

export default registerDentists;


