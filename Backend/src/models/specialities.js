import mongoose from "mongoose";

const specialitySchema = new mongoose.Schema({
    Speciality : {
        type:String,
        required: true,
        unique: true
      }  
});
mongoose.model("Specialites",specialitySchema);