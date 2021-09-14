import {Staff} from "../../interfaces/staff";
import {insertData} from "../../database/database-controller";
import createStaffQuery from "../../database/queries/create-staff";


const registerStaff = (async (req: any, res: any) => {
    const staff: Staff = req.body;
    const data = [
        staff.person.id,
        staff.person.firstName,
        staff.person.lastName,
        staff.person.phoneNumber,
        staff.person.street1,
        staff.person.street2,
        staff.person.city,
        staff.person.state,
        staff.person.zipCode,
        staff.person.gender,
        new Date(staff.person.dateOfBirth),
        staff.id,
        staff.description,
        staff.clinicId
    ]
    try {
        const response = await insertData(data, createStaffQuery);
        res.json(response);
    } catch (e) {
        res.json(e);
    }
})

export default registerStaff;


