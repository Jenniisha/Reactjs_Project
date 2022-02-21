import mongoose from "mongoose";

const ptientSchema = new mongoose.Schema({
    patientNumber: {
        type:Number,
        required: true,
        unique: true
      },
    
    
    name: {
      type: String,
      required: true,
    },
  
    age: {
      type:Number,
      required: true,
    },
  
    gender: {
        type:String,
        required: true,
    },
});
mongoose.model("Patients",ptientSchema);