import express, { Request, Response, } from 'express';
import { use } from '../model/interface';
import  authenticator  from "../middleware/authenticator";
import Notification from "../model/errorHelper";
export const userRouter = express.Router();
import { body, validationResult } from "express-validator"
import schema from '../mongo-models/user-schama';




const UserValidate = [
    body("Name", "Name cannot be null").exists(),
    body("CompanyID", "ID must be vailed").exists(),
]


// PUT API---------------------------------------------------------------------------------------------------

userRouter.put("/update/:id", authenticator , async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        // const error = "Password incorrect please check.";
        return Notification.BadRequest(req, res,{ errors: errors.array() })
        // return res.status(400).json({ errors: errors.array() });
    }
    try {
        const {
            CompanyId,
            Name,
            Address1,
            Address2,
            City,
            State,
            Zip,
            Phone,
            DisplayInAssetViews,
            IsActive,


        } = req.body;
        const newUser: any = {
            CompanyId: CompanyId,
            Name: Name,
            Address1: Address1,
            Address2: Address2,
            City: City,
            State: State,
            Zip: Zip,
            Phone: Phone,
            DisplayInAssetViews: DisplayInAssetViews,
            IsActive: IsActive,
        }

        let user = await schema.findById(req.params.id);
        if (!user) {
            console.log(user);
            // return  res.status(404).send("User not Found");
            return Notification.NotFound(req, res, onmessage);


        }


        user = await schema.findByIdAndUpdate(req.params.id, { $set: newUser }, { new: true });
        res.json(user);
    }
    catch (error) {
        console.log(error);
        // res.status(500).send("Internal server Error");
        Notification.InternalError(req, res, error);

    }
});


// Delete api -----------------------------------------------------------------------------------------------------
userRouter.delete("/delete/:id",authenticator , async (req: Request, res: Response) => {
    try {
        let user = await schema.findByIdAndRemove(req.params.id);
        if (!user) {
            
            // return res.status(404).send("not found");
            Notification.InternalError(req, res, Error);
        }
        // user = await User.findById({Success: "User Deleted Successfully"});
        res.json(user);
    }
    catch (error) {
        console.log(error);
        // res.status(500).send("Internal server Error");
        Notification.InternalError(req, res, error);
    }

})




// GetByID api -------------------------------------------------------------------------------------------------------------
userRouter.get("/:id", async (req: Request, res: Response) => {
    try {
        let user = await schema.findById(req.params.id);
        if (!user) {
            // return res.status(404).send("not found");
            Notification.InternalError(req, res, Error);
        }
        // user = await User.findById({Success: "});
        res.json(user);

    }
    catch (error) {
        console.log(error);
        // res.status(500).send("Internal server Error");
        Notification.InternalError(req, res, error);
    }

})







export default userRouter;