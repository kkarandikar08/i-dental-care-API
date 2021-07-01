import { MongoClient, connect, Db,} from "mongodb";
import {Patient} from "../interfaces/Patient";

const uri = "mongodb+srv://admin:adminpassword@identalcare.ck5wp.mongodb.net/DentalCare?retryWrites=true&w=majority";
const client = new MongoClient(uri);
let database: Db;

const connectDatabase = async () => {
        const connection = await client.connect();
        database = client.db('DentalCare');
        return connection.isConnected();
};

const insertData = async (data: any) => {
    const patients = database.collection('Patient');
    const insertedData = await patients.insertOne(data);
    return insertedData.result;
}

export  { connectDatabase, insertData };