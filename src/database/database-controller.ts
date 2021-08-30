import * as mysql from 'mysql2/promise';

import {databaseConfigurations} from "../config/connection";

const dbConfig = databaseConfigurations;

const insertData = async (data: any, query: string) => {

    const connection = await mysql.createConnection(dbConfig);
    try {
        const result = await connection.query(query, data);
        console.log(result);
        return result;
    // @ts-ignore
    } catch (e: any) {
        if (e.code === 'ER_DUP_ENTRY') {
            return 'The patient already exists in the Database!'
        }
        return e;
    } finally {
        await connection.end(() => {
            console.log('connection closed successfully');
        })
    }

}

const readData = async (query: string) => {
    const connection = await mysql.createConnection(dbConfig);
    // try {
    //     const result = await connection.query
    // }

}

export  { insertData, readData };
