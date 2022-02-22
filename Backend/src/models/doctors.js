import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
  
    doctorNumber: {
        type: Number,
        required: true,
        unique: [true, 'The doctorNumber is already exists.'],
      },
    
    name: {
      type: String,
      required: [true, 'Enter Name.'],    
    },
  
    qualification: {
      type:String,
      required:['Enter Qualification.']
    },
  
    speciality: {
        type:String,
        required:['Select Speciality.']   
       }
});
mongoose.model("Doctors",doctorSchema);