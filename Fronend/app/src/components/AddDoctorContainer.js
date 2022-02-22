import AddDoctor from "./AddDoctor";
import { connect } from 'react-redux';



// state is nothing but store that we are passing in the parameter
const mapStateToProps = (store) => {
    // console.log(store.reducer2);
    // console.log("Inside reducer2");

    return {
        doctorData: store.reducer2


    }
}

const mapDispatchToProps = (dispatch) => {

    return {

        addDoctor: (newDoctor) => dispatch({ type: "ADD_DOCTOR_TO_BACKEND", doctor: newDoctor }),
        editDoctor: (updatedDoctorObj) => dispatch({ type: "EDIT_DOCTOR_TO_BACKEND", doctor: updatedDoctorObj }),



    }

}



export default connect(mapStateToProps, mapDispatchToProps)(AddDoctor);