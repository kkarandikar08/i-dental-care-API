import { Router } from "express";
import registerPatients from "../../services/patients/register-patients";

const patientRoutes = Router();

patientRoutes.post('/register', registerPatients);
//get all patients
//update a patient
//get a patient
//delete a patient


export default patientRoutes;
