
import express from 'express';
import router from './src/routes/create-user';
import idRouter from './src/routes/id-provider';
import userRouter from './src/routes/user';
import loginRouter from './src/routes/login';
import cors from "cors";


import mongoose from 'mongoose';
const mongoURL = 'mongodb://127.0.0.1:27017/station2'

mongoose.connect(mongoURL, () => {
    console.log('Connected to Database.');
})


// connectToMongo;

const app = express()
app.use(cors());
const PORT = 8000;
app.use(express.json());

//routes
app.use("/provider", idRouter);
app.use("/create-user", router);
app.use("/user", userRouter);
app.use("/login", loginRouter);






app.listen(PORT, () => {
    console.log(`Example app listening on port http://localhost:${PORT}`)
})

