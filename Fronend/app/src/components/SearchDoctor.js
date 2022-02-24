import { useState } from "react";

import { Link } from "react-router-dom";

import '../Styles/Table.css'

//Search doctor user story
const SearchDoctor = (props) => {
    const specialityOptions = ["Orthodontist", "Opthalmologist", "Paediatrician", "Gastroentrologist", "Cardiologist"];
    const [localState, setLocalState] = useState({ speciality: "" });

    const handleChange = (e) => {
        e.preventDefault();
        setLocalState({ ...localState, [e.target.name]: e.target.value });
        
    };

    const searchDoctor = (e) => {
        e.preventDefault();
        props.searchDoctor(localState.speciality);
    }



    // Delete Doctor user story

    const deleteDoctor = (e,doctorNum) => {
        e.preventDefault();
        props.deleteDoctor(doctorNum)

    }

    return (
        <div>
            <h1>DOCTOR SEARCH FORM</h1>

            <form>

                <div style={{ border: "4px solid skyblue" }}>
                    <label style={{ margin: "20px" }}>SPECIALITY</label>
                    <select name="speciality" value={localState.speciality} onChange={handleChange}>
                        <option value={specialityOptions[0]}>Orthodontist</option>
                        <option value={specialityOptions[1]}>Opthalmologist</option>
                        <option value={specialityOptions[2]}>Paediatrician</option>
                        <option value={specialityOptions[3]}>Gastroentrologist</option>
                        <option value={specialityOptions[4]}>Cardiologist</option>
                    </select>
                    &nbsp;&nbsp;

                    <button onClick={searchDoctor}>SEARCH</button>

                    <br /><br /><br />
                    <table style={{ width: "100%", border: "5px solid white" }}>
                        <tr style={{ backgroundColor: "lightblue", color: "white" }}>
                            
                            <th>DOCTOR ID</th>
                            <th>DOCTOR NUMBER</th>
                            <th>NAME</th>
                            <th>QUALIFICATION</th>
                            <th>SPECIALITY</th>
                            <th>EDIT ACTION</th>
                            <th>DELETE ACTION</th>
                        </tr>

                        {props.doctorData.searchResults ? props.doctorData.searchResults.map((item, key) => <tr><td> {item._id}</td><td> {item.doctorNumber}</td>
                        <td> {item.name}</td><td> {item.qualification}
                        </td><td>{item.speciality} </td><td><Link to={{pathname:"/doctors/edit/?doctorNumber="+item.doctorNumber+"&_id="+item._id+"&name="+item.name+"&qualification="+item.qualification+"&speciality="+item.speciality}}  >EDIT</Link></td><td><button onClick={(e) => deleteDoctor(e,item.doctorNumber)} >DELETE</button></td></tr>) : ""}

                        {props.doctorData.deleteDoctorSuccess ? props.doctorData.deleteDoctorSuccess + "Search Again to referesh the search results" : ""}

                    </table>


                </div>
            </form>




        </div>

    )
}


export default SearchDoctor;
