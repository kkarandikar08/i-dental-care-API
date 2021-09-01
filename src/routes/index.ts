import { Router } from 'express';
import patientRoutes from "./patients/patient-routes";
import dentistRoutes from "./dentists/dentist-routes";
import appointmentRoutes from "./appointments/appointment-routes";

const routes = Router();

routes.use('/api', [
    patientRoutes,
    dentistRoutes,
    appointmentRoutes
]);

export default routes;
