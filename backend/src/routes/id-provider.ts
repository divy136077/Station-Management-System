import express, { Express, Request, Response, } from 'express';
import provider from "../mongo-models/provider"
import Notification from "../model/errorHelper";
import { ErrorType } from "../model/error";
import { body, validationResult } from "express-validator"
export const idRouter = express.Router();



// let idrouter : any

// Get ID api -----------------------------------

idRouter.get("/getid", async (req: Request, res: Response) => {

    try {
        const idProvider = await provider.find({});
        res.send(idProvider)
    }

    catch (error) {
        console.log(error);
        // res.status(500).send("Internal Server Error");
        Notification.InternalError(req,res,error);
    }
});

// Post ID api ----------------------------------------
const CreateUserValidate = [
    body("name", "Name cannot be null").exists(),
    body("id", "ID must be vailed").exists(),

];


idRouter.post("/adddata", CreateUserValidate, async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        // return res.status(400).json({ errors: errors.array() });
        return Notification.BadRequest(req, res,{ errors: errors.array() })
    }
    try {
        console.log("-----id", req.body.id);
        let idprovider = await provider.findOne({ id: req.body.id });
        if (idprovider) {
            const error = "ID is already defind.";
            return Notification.BadRequest(req, res, error)
            // res.status(400).json({error : "ID is already defind"});
        }
        idprovider = await provider.create({
            id: req.body.id,
            name: req.body.name,
        });
        // res.status(200).json({successs : " Data added syccessfully "});

    }
    catch (error) {
        console.log(error);
        if ((error as Error).name == ErrorType.VALIDATION_ERROR) {
            Notification.BadRequest(req, res, (error as Error).message)
        } else {

            Notification.InternalError(req, res, error);
        }

        // res.status(500).send("Internal Server Error");
    }
})

// module.exports = idrouter;
export default idRouter