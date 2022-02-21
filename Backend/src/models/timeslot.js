import mongoose from "mongoose";

const timeslotSchema = new mongoose.Schema({
    timeSlot: {
        type: String,
        required: true,
        unique:true,
      }
    
});
mongoose.model("Timeslot",timeslotSchema);