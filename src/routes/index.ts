import { Router } from 'express';
import patientRoutes from "./patients/patient-routes";
import dentistRoutes from "./dentists/dentist-routes";
import appointmentRoutes from "./appointments/appointment-routes";
import staffRoutes from "./staff/staff-routes";

const routes = Router();

routes.use('/api', [
    patientRoutes,
    dentistRoutes,
    appointmentRoutes,
    staffRoutes
]);

export default routes;
