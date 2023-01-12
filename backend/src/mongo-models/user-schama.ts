
import mongoose from "mongoose";
const {Schema} = mongoose;

const userSchema = new Schema({
    
    CompanyId:{
        type:String,
        require: true
    },
    Name:{
        type:String,
       
    },
    Address1:{
        type:String,
    },
    Address2:{
        type:String,
    },
    City:{
        type:String,
    },
    State:{
        type:String,
    },
    Zip:{
        type:String,
    },
    Phone:{
        type:String,
    },
    DisplayInAssetViews:{
        type:Boolean,
    },
    IsActive:{
        type:Boolean,
    },
    email:{
        type:String,
      
        unique:true
    },
    password:{
        type:String,
        
    },


});

const schema = mongoose.model("user",userSchema);

// module.exports = User ;
export default schema
