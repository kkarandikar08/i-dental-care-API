import { readData } from "../../database/database-controller";

import {Auth} from "../../interfaces/Auth";
import loginQuery from "../../database/queries/login";



const login = (async (req: any, res: any) => {
    const user: Auth = req.body;
    const data = [
        user.username,
        user.password,
        user.employeeType
    ];
    try {
        const response = await readData(loginQuery, data);
        // @ts-ignore
        if (response[0][0].length === 0) {
            res.status(401).send('Username or password entered is incorrect');
        } else {
            // @ts-ignore
            res.json(response[0][0][0].id);
        }

    } catch (e) {
        res.json(e);
    }
})

export default login;


