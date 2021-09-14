import express, {Router} from "express";
import cors from "cors";
import bodyParser from "body-parser";
import routes from "./src/routes";
import * as env from 'dotenv';

env.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use(routes);

//register
//login
//patients
//patients
//create-case-paper
//appointments(GET, POST, PUT)


app.listen(process.env.SERVER_PORT, () => {
    console.log(`Running on Port ${process.env.SERVER_PORT}`);
});
