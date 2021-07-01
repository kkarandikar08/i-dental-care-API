import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { connectDatabase, insertData } from './database/connection';
import {MongoClient} from "mongodb";
import {Patient} from "./interfaces/Patient";


const app = express();
app.use(cors());
app.use(bodyParser.json());


app.get('/patients', ( async (req, res) => {
    const connection = await connectDatabase();
    if (connection) {
    }
}));

app.post('/create-case-paper', ( async (req, res) => {
    console.log(req.body);
    const newPatient: Patient = req.body;
    const connection = await connectDatabase();
    if(connection) {
        try {
        const insertingData = await insertData(newPatient);
        res.json(insertingData.ok);
        } catch (e) {
            res.json(e);
        }
    }
}));

app.listen(5000, () => {
    console.log('Running on Port 5000');
});