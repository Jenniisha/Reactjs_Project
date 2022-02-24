const AddDoctorReducer = (state = {}, action) => {

    console.log(action);
    console.log(state);


    switch (action.type) {

        case "ADD_DOCTOR_SUCCESSFUL":
            let newState3 = { ...state, addResults: action.serverMsg };
            newState3.addDoctorSuccess = action.serverMsg;
            return newState3;

        case "EDIT_DOCTOR_SUCCESSFUL":
            let newState4 = { ...state };
            newState4.editDoctorSuccess = action.serverMsg;
            return newState4;

        default:
            return state;

    };
}

export default AddDoctorReducer;