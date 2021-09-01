import { Router } from "express";
import createAppointment from "../../services/appointments/create-appointment";

const appointmentRoutes = Router();

appointmentRoutes.post('/appointment', createAppointment);


export default appointmentRoutes;
