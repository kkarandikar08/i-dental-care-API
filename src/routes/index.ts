import { Router } from 'express';
import patientRoutes from "./patients/patient-routes";

const routes = Router();

routes.use('/api', [patientRoutes]);

export default routes;
