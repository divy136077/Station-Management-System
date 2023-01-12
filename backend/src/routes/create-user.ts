import express, { Request, Response, } from 'express';
import Notification from "../model/errorHelper";
import { handleSearchValues, SortOrder } from "../model/config";
import schema from "../mongo-models/user-schama";
import { ErrorType } from "../model/error";
const bcrypt = require("bcryptjs");
import  authenticator  from "../middleware/authenticator";
export const router = express.Router();


router.post("/createuser", async (req: Request, res: Response) => {
  
    try {
      
        var salt = await bcrypt.genSaltSync(10);
        var securedPassword = await bcrypt.hash(req.body.password, salt);
        const user = await schema.create({
            CompanyId: req.body.CompanyId,
            Name: req.body.Name,
            Address1: req.body.Address1,
            Address2: req.body.Address2,
            City: req.body.City,
            State: req.body.State,
            Zip: req.body.Zip,
            Phone: req.body.Phone,
            email: req.body.email,
            password: securedPassword,
            DisplayInAssetViews: req.body.DisplayInAssetViews,
            IsActive: req.body.IsActive
        });


        res.json(user);
    } catch (error) {
        console.log(error, (error as Error).message, (error as Error).name);
        if ((error as Error).name == ErrorType.VALIDATION_ERROR) {
            Notification.BadRequest(req, res, (error as Error).message)
        } else {

            Notification.InternalError(req, res, error);
        }

       
    }
});



// search api ------------------------

router.get("/", authenticator ,async (req: Request, res: Response) => {
    try {
        const pageSize: any = req?.query?.pageSize || 5;
        const pageNumber: any = req.query.pageNumber || 1;

        const filters: any = req.query;
        const sortBy: string = filters?.sortColumn ? filters?.sortColumn : 'Name'
        const sortDir = SortOrder.includes(filters?.sortDir) ? filters?.sortDir : 'asc'
        const newFilters: any = handleSearchValues(filters)
        console.log("----filters", filters, newFilters, sortBy);
        let user = await schema.find(newFilters).select("-password").limit(pageSize).skip((pageNumber-1)*pageSize)
        const totalRecords = await schema.countDocuments(newFilters)
        user = user.sort((a: any, b: any) => a[sortBy] > b[sortBy] ? 1 : -1);

        if (sortDir === "desc") {
            user.reverse()
        }

        console.log(user);
        res.json({ user, meta_data: { totalRecords, pageSize } });

    } catch (error) {
        console.log(error);
        // res.status(500).send("Internal server Error");
        Notification.InternalError(req, res, error);

    }
})

export default router;
