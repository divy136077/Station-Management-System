import mongoose, {Schema } from "mongoose";

const idSchema = new Schema({

    id:{
        type:String,
        required:true
    },
    name:{
        type:String
    }
})

const provider = mongoose.model( "idprovider" , idSchema )

export default provider ;