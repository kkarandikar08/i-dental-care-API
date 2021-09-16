import { Router } from "express";
import registerDentists from "../../services/dentists/register-dentists";
import login from "../../services/auth/login";

const authRoutes = Router();

authRoutes.post('/login', login);
//get all patients
//update a patient
//get a patient
//delete a patient


export default authRoutes;
