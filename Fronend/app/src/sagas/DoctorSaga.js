import { put, takeLatest, all } from "redux-saga/effects";
// we need to code generator function for saga like this


//Search Doctor saga function
function* searchDoctor(action) {
  // console.log("Inside Search Doctor saga");
  // console.log(action);
  const json = yield fetch("http://localhost:8000/doctors/search/speciality/" + action.speciality)
    .then((response) =>
      response.json()
    );
  yield put({ type: "SEARCH_DOCTOR_SUCCESSFUL", json: json });
}
function* actionWatcher() {
  yield takeLatest("SEARCH_DOCTOR_FROM_BACKEND", searchDoctor);
}




// Delete Doctor saga function
function* deleteDoctor(action) {
  // console.log("Inside Delete Doctor saga");
  // console.log(action);
  const json = yield fetch("http://localhost:8000/doctors/delete/" + action.doctorNumber)
    .then((response) =>
      response.json()
    );
  yield put({ type: "DELETE_DOCTOR_SUCCESSFUL", json: json });
}
function* actionWatcher1() {
  yield takeLatest("DELETE_DOCTOR_FROM_BACKEND", deleteDoctor);
}


// ADD DOCTOR

function* addDoctor(action) {
  var bodyContent = {
    doctorNumber: action.doctor.doctorNumber,
    name: action.doctor.name,
    qualification: action.doctor.qualification,
    speciality: action.doctor.speciality
  };

  var stringifiedBody = JSON.stringify(bodyContent);

  const serverResponse = yield fetch("http://localhost:8000/doctors/add", {
    method: "POST",
    body: stringifiedBody,
    headers: {
      "Content-type": "application/json;chartset=UTF-8",
    },
  }).then((res) => res.json());
  //   .then((res) => console.log(`data sent successfully to the backed and  ${res.msg}`));
  yield put({ type: "ADD_DOCTOR_SUCCESSFUL", serverMsg: serverResponse.msg, });

}

function* actionWatcher2() {
  yield takeLatest("ADD_DOCTOR_TO_BACKEND", addDoctor);
}

//EDIT DOCTOR
function* editDoctor(action) {
  var bodyContent = {
    qualification: action.doctor.qualification,
  };

  var stringifiedBody = JSON.stringify(bodyContent);
console.log("Inside edit doctor saga");
  const serverResponse = yield fetch("http://localhost:8000/doctors/edit/"+action.doctor._id ,
  {
    method: "POST",
    body: stringifiedBody,
    headers: {
      "Content-type": "application/json;chartset=UTF-8",
    },
  }).then((res) => res.json());
  yield put({ type: "EDIT_DOCTOR_SUCCESSFUL", serverMsg: serverResponse.msg, });

}

function* actionWatcher3() {
  yield takeLatest("EDIT_DOCTOR_TO_BACKEND", editDoctor);
}




// for all the above sagas we need to create root saga
export default function* rootSaga() {
  yield all([
    actionWatcher(),
    actionWatcher1(),
    actionWatcher2(),
    actionWatcher3()
  ]);
}