import SearchDoctor from "./SearchDoctor";
import { connect } from 'react-redux';



// state is nothing but store that we are passing in the parameter
const mapStateToProps = (store) => {
    // console.log(store.reducer1);
    // console.log("Inside reducer1");
    return {
        doctorData: store.reducer1


    }
}

const mapDispatchToProps = (dispatch) => {
    return {

        searchDoctor: (specialityValue) => dispatch({ type: "SEARCH_DOCTOR_FROM_BACKEND", speciality: specialityValue }),
        deleteDoctor: (doctNum) => dispatch({type:"DELETE_DOCTOR_FROM_BACKEND", doctorNumber: doctNum })
     



    }
}



export default connect(mapStateToProps, mapDispatchToProps)(SearchDoctor);