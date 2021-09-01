import { Router } from "express";
import registerDentists from "../../services/dentists/register-dentists";

const dentistRoutes = Router();

dentistRoutes.post('/dentist/register', registerDentists);
//get all patients
//update a patient
//get a patient
//delete a patient


export default dentistRoutes;
