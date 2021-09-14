import { Router } from "express";
import registerStaff from "../../services/staff/register-staff";

const staffRoutes = Router();

staffRoutes.post('/staff/register', registerStaff);


export default staffRoutes;
