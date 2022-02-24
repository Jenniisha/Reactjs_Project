const DoctorReducer = (state = {}, action) => {

    console.log(action);
    console.log(state);



    switch (action.type) {

        case "SEARCH_DOCTOR_SUCCESSFUL":
            let newState = { ...state, searchResults: action.doctorSearchResult }
            newState.searchDoctorSuccess = "SUCCESSFULLY SEARCHED THE DOCTOR DATA";
            return newState;


        case "DELETE_DOCTOR_SUCCESSFUL":
            let newState1 = { ...state, deleteResults: action.json }
            newState1.deleteDoctorSuccess = "SUCCESSFULLY DELETED THE DOCTOR DATA";
            return newState1;

        default:
            return state;

    };
}

export default DoctorReducer;