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

const insertData = async (data: any, collection: string) => {
    const collectionName = database.collection(collection);
    const insertedData = await collectionName.insertOne(data);
    return insertedData.result;
}

const readData = async (collection: string, query?: any, data?: any, findMultiple: boolean = true) => {
    const collectionName = database.collection(collection);
    if (!findMultiple) {
        try {
            return await collectionName.findOne(query);
        } catch (e) {
            return e;
        }
    } else {
        try {
            return collectionName.find(query);
        } catch (e) {
            return e;
        }
    }
}

export  { connectDatabase, insertData, readData };