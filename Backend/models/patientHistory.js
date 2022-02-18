import { Int32 } from "mongodb";
import mongoose from "mongoose";

const patientHistorySchema = new mongoose.Schema({
    year: {
        type: String,
        required: true,
      },
    
    
      month: {
      type: String,
      required: true,
    },
  
    patientNumber: {
      type:Number,
      required: true,
    },
  
    description: {
        type:String,
        required: true,
    },
});
mongoose.model("PatientHistory",patientHistorySchema);