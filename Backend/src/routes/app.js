import mongoose from "mongoose";
import express from "express";
import cors from 'cors';
import bodyParser from 'body-parser';
const app = express();

//Importing models
import "../models/doctors.js";
import "../models/doctors.js";
import "../models/patients.js";
import "../models/patientHistory.js";
import "../models/timeslot.js";
import "../models/specialities.js";
import "../models/appointments.js";

import SimpleNodeLogger from 'simple-node-logger';
const opts = {
  logFilePath: 'mylogfile.log',
  timestampFormat: 'YYYY-MM-DD HH:mm:ss.SSS'
};
const log = SimpleNodeLogger.createSimpleLogger(opts);


const connectionStr = `mongodb://0.0.0.0:27017/clinicdb`;
mongoose.connect(connectionStr)
  .then(() => {
    console.log(`Connected to the mongodb Database`);
    log.info(`Connected to the mongodb Database`);
  })
  .catch((err) => {
    console.log(err.message);
    log.err(err.message);
  });



const doctors = mongoose.model("Doctors");
// const patients = mongoose.model("Patients");
// const patientHistory = mongoose.model("PatientHistory");
// const timeSlots = mongoose.model("Timeslot");
// const specialites = mongoose.model("Specialites");
// const appointments = mongoose.model("Appointment");



app.use(express.static('public'));


app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//GET
//Getting all the doctors details
app.get('/', (req, res) => {
  res.send("WELCOME TO CLINIC MANAGEMENT HOME PAGE");
  log.info('WELCOME TO CLINIC MANAGEMENT HOME PAGE');
});




//GET
//Getting all the doctors details
app.get('/doctors', (req, res) => {
  doctors.find({}, function (err, docs) {
    res.json(docs);
    log.info(`Searched for all the doctors`);
  });
});



//Searching doctors based on speciality
app.get('/doctors/search/speciality/:speciality', (req, res) => {
  const specialityParam = req.params.speciality;
  console.log(specialityParam);
  doctors.find({ "speciality": specialityParam }, function (err, docs) {
    res.json(docs);
    console.log(docs);
  log.info(`Searched for all the doctors based on speciality`);
    

  });
});

//GET
//Getting  the doctors details based on id
app.get('/doctors/search/id/:id', (req, res) => {
  doctors.find({ _id: req.params.id }, function (err, docs) {
    res.json(docs);
    log.info('Searched doctors based on id');
  });
});


//GET
//Getting  the doctors details based on doctorNumber
app.get('/doctors/search/doctorNumber/:doctorNumber', (req, res) => {
  const doctorNumberParam = req.params.doctorNumber;
  console.log(doctorNumberParam);
  doctors.find({ "doctorNumber": doctorNumberParam }, function (err, docs) {
    res.json(docs);
    log.info('Searched doctors based on Doctor Number');
  });
});

//GET
//Getting the doctors details based on name
app.get('/doctors/search/name/:name', (req, res) => {
  const nameParam = req.params.name;
  console.log(nameParam);
  doctors.find({ "name": nameParam }, function (err, docs) {
    res.json(docs);
    console.log(docs);
    log.info('Searched doctors based on name');
  });
});

//GET
//Getting  the doctors details based on qualification
app.get('/doctors/search/qualification/:qualification', (req, res) => {
  const qualificationParam = req.params.qualification;
  console.log(qualificationParam);
  doctors.find({ "qualification": qualificationParam }, function (err, docs) {
    res.json(docs);
    console.log(docs);
    log.info('Searched doctors based on qualification');
  });
});



//POST
//Adding the new Doctors details
app.post('/doctors/add', (req, res) => {
  doctors.create(req.body).then((ans) => {
    log.info("New Doctor Got Inserted To The Database");
    res.status(200).send({ msg: "Doctor added successfully" });
  }).catch((err) => {
    log.err(err.Message);
  });
});



//EDIT
//Editing the doctors based on id
app.put('/doctors/edit/:id', (req, res) => {
  doctors.findByIdAndUpdate(req.params.id, req.body).then((ans) => {
    console.log("Doctor data is updated");
    log.info("Doctor data is updated");
    res.status(200).send({ msg: "Doctor Updated successfully" });
    log.info()
  }).catch((err) => {
    console.log(err.Message);
    log.err(err.Message);
  });
});

//DELETE
//Deleting the doctors based on id
// DELETE a doctor
app.get('/doctors/delete/:name', (req, res,) => {
  doctors.deleteOne({ name: req.params.name }).then((ans) => {
    console.log("one doctor deleted")
    res.status(200).send({ msg: "Doctor removed successfully" });
    log.info(`doctor deleted by its name`)
  }).catch((err) => {
    console.log(err.Message);
    res.status(400).send({ msg: "Doctor doesn't exist to remove" });

  });
});

// DELETE a doctor by its ID
app.post('/doctors/delete/:id', (req, res,) => {
  doctors.findByIdAndDelete(req.params.id).then((ans) => {
    console.log("one doctor deleted")
    res.status(200).send({ msg: "Doctor removed successfully" });
    log.info(`doctor deleted by its ID`)
  }).catch((err) => {
    console.log(err.Message);
    res.status(400).send({ msg: "Doctor with the id doesn't exist" });

  });
});






export default app;