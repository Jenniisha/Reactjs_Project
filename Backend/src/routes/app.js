import mongoose from "mongoose";
import express from "express";
import cors from 'cors';
import bodyParser from 'body-parser';
const app = express();

//Importing models
import "../models/doctors.js";
// import "../models/patients.js";
// import "../models/patientHistory.js";
// import "../models/timeslot.js";
// import "../models/specialities.js";
// import "../models/appointments.js";

import SimpleNodeLogger from 'simple-node-logger';
const opts = {
  logFilePath: 'mylogfile.log',
  timestampFormat: 'YYYY-MM-DD HH:mm:ss.SSS'
};
const log = SimpleNodeLogger.createSimpleLogger(opts);


const connectionStr = `mongodb://0.0.0.0:27017/clinicdb`;
mongoose.connect(connectionStr)
  .then(() => {
    log.info(`Connected to the mongodb Database`);
  })
  .catch((err) => {
    log.error(err.message);
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
    log.info(`Searched for all the doctors And Total Documents found: ${docs.length}`);
  });
});



//Searching doctors based on speciality
app.get('/doctors/search/speciality/:speciality', (req, res) => {
  log.info(`obtain request for searching a doctor by its speciality ${req.params.speciality}`)
  const specialityParam = req.params.speciality;
  doctors.find({ "speciality": specialityParam }, function (err, docs) {
    log.info(`Searched for all the doctors based on speciality: ${req.params.speciality}`);
    log.info(`Total documents found based on speciality are: ${docs.length}`);
    res.json(docs);
   
  });
});

//GET
//Getting  the doctors details based on id
app.get('/doctors/search/id/:_id', (req, res) => {
  doctors.find({ _id: req.params._id }, function (err, docs) {
    res.json(docs);
    log.info(`Searched doctors based on id: ${req.params._id}`);
  });
});


//GET
//Getting  the doctors details based on doctorNumber
app.get('/doctors/search/doctorNumber/:doctorNumber', (req, res) => {
  const doctorNumberParam = req.params.doctorNumber;
  doctors.find({ "doctorNumber": doctorNumberParam }, function (err, docs) {
    res.json(docs);
    log.info(`Searched doctors based on Doctor Number:${req.params.doctorNumber}`);

  });
});

//GET
//Getting the doctors details based on name
app.get('/doctors/search/name/:name', (req, res) => {
  const nameParam = req.params.name;
  doctors.find({ "name": nameParam }, function (err, docs) {
    res.json(docs);
    log.info(`Searched doctors based on name: ${req.params.name}`);
    log.info(`Total documents found for Searched doctors based on Doctor Name:${docs.length}`);
  });
});

//GET
//Getting  the doctors details based on qualification
app.get('/doctors/search/qualification/:qualification', (req, res) => {
  const qualificationParam = req.params.qualification;
  doctors.find({ "qualification": qualificationParam }, function (err, docs) {
    res.json(docs);
    log.info(`Searched doctors based on qualification:${req.params.qualification} and the documents are:${docs}`);
    log.info(`Total documents found for Searched doctors based on Doctor Qualification:${docs.length}`);
  });
});



//POST
//Adding the new Doctors details
app.post('/doctors/add', (req, res) => {
  log.info(`obtain request for adding a doctor ${req.body.name}`)
  doctors.create(req.body).then((doc) => {
    res.status(200).send({ msg: "New Doctor added successfully" });
    log.info("New Doctor Got Inserted To The Database");

  }).catch((err) => {
    log.error(err);
    res.status(400).send({ msg: "Doctor with given id already exists!!" });
  });
});

//EDIT
//Editing the doctors based on id

app.post('/doctors/edit/:id', (req, res) => {
  doctors.findByIdAndUpdate(req.params.id, req.body)
    .then((ans) => {
      log.info("Doctor data is updated");
      res.status(200).send({ msg: "Doctor Updated successfully" });
      log.info("Doctor Updated successfully:" + req.params.id)
    }).catch((err) => {
      log.error(err.Message);
      res.status(400).send({ msg: "Doctor Updation Failed.!!" });
    });
});

//DELETE
//Deleting the doctors based on doctorNumber
app.get('/doctors/delete/:doctorNumber', (req, res,) => {
  log.info(`obtain request for deleting a doctor ${req.params.doctorNumber}`)
  doctors.deleteOne({ doctorNumber: req.params.doctorNumber }).then((ans) => {
    log.info("one doctor deleted")
    res.status(200).send({ msg: "Doctor removed successfully" });
    log.info(`doctor deleted by its doctornumber`)
  }).catch((err) => {
    console.log(err.Message);
    res.status(400).send({ msg: "Doctor doesn't exist to remove" });

  });
});


// DELETE a doctor by its ID
app.post('/doctors/delete/:id', (req, res,) => {
  log.info(`obtain request for deleting a doctor by its ID ${req.params.id}`)
  doctors.findByIdAndDelete(req.params.id).then((doc) => {
    log.info("one doctor deleted")
    res.status(200).send({ msg: "Doctor removed successfully" });
    log.info(`one doctor is deleted to the database with ID ${doc._id}`)
    log.info(`doctor deleted by its ID`)
  }).catch((err) => {
    log.error(err)
    res.status(400).send({ msg: "Doctor with the id doesn't exist" });

  });
});







export default app;