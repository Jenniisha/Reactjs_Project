const DoctorReducer = (state = {}, action) => {

    console.log(action);
    console.log(state);
   


    switch (action.type) {

        case "SEARCH_DOCTOR_SUCCESSFUL":
            let newState = { ...state, searchResults: action.json }
            newState.searchDoctorSuccess = "SUCCESSFULLY SEARCHED THE DOCTOR DATA";
            console.log("Inside search doctor successful");
            console.log(newState);

            return newState;


        case "DELETE_DOCTOR_SUCCESSFUL":
                let dNum = action.doctorNumber;
                let [...newState1] = state;
                newState1 = newState1.filter(item => item.name !== dNum);
                console.log("Inside delete  doctor successful");
                console.log(newState1);
                return newState1;
    
    
    
           
           





        default:
            return state;

    };
}

export default DoctorReducer;