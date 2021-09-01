import {insertData} from "../../database/database-controller";
import {Appointment} from "../../interfaces/Appointment";
import createAppointmentQuery from "../../database/queries/create-appointment";



const createAppointment = (async (req: any, res: any) => {
    const appointment: Appointment = req.body;
    const data = [
        appointment.id,
        appointment.startTime,
        appointment.endTime,
        appointment.patientId,
        appointment.dentistId,
        appointment.serviceId,
        appointment.status,
        appointment.clinicId
    ]
    try {
        const response = await insertData(data, createAppointmentQuery);

        res.json(response);
    } catch (e) {
        res.json(e);
    }

})

export default createAppointment;


