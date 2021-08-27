import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import {connectDatabase, insertData, readData} from './database/connection';
import {Patient} from "./interfaces/Patient";
import {Cursor} from "mongodb";


const app = express();
app.use(cors());
app.use(bodyParser.json());


app.get('/patients', ( async (req, res) => {
    const connection = await connectDatabase();
    let value: any = req.query.value;

    let query = {};
    console.log(value, req.query);
    if ((parseInt(value))) {
        query = {phone: {$regex: `^${value}`}}
    } else {
        query = {firstName: {$regex: `^${value}`, $options: "i"}};
    }
    if (connection) {
        try {
            const getPatients: Cursor = await readData('Patient', query);
            let patients: any[] = [];
            await getPatients.forEach((item: any) => {
                patients.push(item);
            })
            console.log(patients);
            res.status(200).json(patients);
        } catch (e) {
            res.status(400).json(e);
        }
    }
}));

app.post('/create-case-paper', ( async (req, res) => {
    const newPatient: Patient = req.body;
    console.log('logging new patient body', req.body);
    const connection = await connectDatabase();
    if(connection) {
        try {
        const findPatient = await readData('Patient',{firstName: newPatient.firstName, lastName: newPatient.lastName, phone: newPatient.phone}, newPatient, false );
        console.log('looging if new patient already exists', newPatient);
        if (findPatient !== null) {
            res.json('The Patient you are trying to add already exists in the system ');
        } else {
            try {
            await insertData(newPatient, 'Patient');
            res.json(200);
            } catch (e) {
                res.status(400).json(e);
            }
        }
        } catch (e) {
            res.json(e).status(400);
        }
    }
}));

//register
//login
//patients
//patient
//create-case-paper
//appointments(GET, POST, PUT)


app.listen(5000, () => {
    console.log('Running on Port 5000');
});