import express, {Router} from "express";
import cors from "cors";
import bodyParser from "body-parser";
import routes from "./src/routes";


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


app.listen(3001, () => {
    console.log('Running on Port 5000');
});
