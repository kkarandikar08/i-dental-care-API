import * as mysql from 'mysql2/promise';

import {databaseConfigurations} from "../config/connection";

const dbConfig = databaseConfigurations;

const insertData = async (data: any, query: string) => {
    console.log('called', query, data);
    const connection = await mysql.createConnection(dbConfig);
    try {
        return await connection.execute(query, data);
    // @ts-ignore
    } catch (e: any) {
        return e;
    } finally {
        await connection.end(() => {
            console.log('connection closed successfully');
        })
    }

}

const readData = async (query: string) => {

    const connection = await mysql.createConnection(dbConfig);
    try {
        return await connection.query('SELECT * FROM Identistry.Person');
    } catch (e) {
        return e;
    }

}

export  { insertData, readData };
