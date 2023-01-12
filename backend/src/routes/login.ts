import express, { Request, Response } from "express";
export const loginRouter = express.Router();
const { body, validationResult } = require("express-validator");
import Login from "../mongo-models/user-schama";
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
import Notification from "../model/errorHelper";


const LoginValidate = [
  body("email", "Email must be in valid format").isEmail(),
  body("password", "Password cannot be null").exists(),
];


loginRouter.post("/", LoginValidate, async (req: Request, res: Response) => {

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    // return res.status(400).json({ errors: errors.array() });
    return Notification.BadRequest(req, res,{ errors: errors.array() })
  }

  const { email, password } = req.body;
  try {
    let user = await Login.findOne({ email: email });
    if (!user) {
      const error = "Email incorrect please check.";
      return Notification.BadRequest(req, res, error)

      // return res.status(400).json({ error: "Email incorrect please check  ." });
    }

    const validPassword = await bcrypt.compare(password, user.password);
    console.log("----------------", validPassword);


    if (!validPassword) {
      const error = "Password incorrect please check.";
      return Notification.BadRequest(req, res, error)

      // return res.status(400).json({ error: "Password incorrect please check." });
    }

    let data = {
      user: {
        id: user.id,
      },
    };
    const authtoken = jwt.sign(data, "DivyLadani", { expiresIn: '10m' });
    res.json({ authtoken });
  } catch (error: any) {
    console.log(error.message);
    // res.status(500).send("Internal Server Error");
    Notification.InternalError(req, res, error);
  }
});


export default loginRouter;
