import mongoose from "mongoose";
import express from "express";
import cors from 'cors';
import bodyParser from 'body-parser';



import "./models/doctors.js";
import "./models/patients.js";
import "./models/patientHistory.js";
import "./models/timeslot.js";
import "./models/specialities.js";
import "./models/appointments.js";
const app = express();


//const connectionStr = `mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false`;
//const connectionStr = `mongodb://localhost:27017/clinicdb`;

const connectionStr = `mongodb://0.0.0.0:27017/clinicdb`;

//const connectionStr = `mongodb+srv://atrain:3j6fttxX3@cluster0.ixxay.mongodb.net/clinicdb`;
mongoose.connect(connectionStr)
  .then(() => {
    console.log(`Connected to the mongodb Database`);

  })
  .catch((err) => {
    console.log(err.message);
  });



const doctors = mongoose.model("Doctors");
const patients = mongoose.model("Patients");
const patientHistory = mongoose.model("PatientHistory");
const timeSlots = mongoose.model("Timeslot");
const specialites = mongoose.model("Specialites");
const appointments = mongoose.model("Appointment");



app.use(express.static('public'));


app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



//Search
app.get('/doctors/search/speciality/:speciality', (req, res) => {
  const specialityParam = req.params.speciality;
  console.log(specialityParam);
  doctors.find({"speciality":"Orthodontist"}, function (err, docs) {
    res.json(docs);
    console.log(docs);
  });
});




export default app;