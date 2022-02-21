import { useState } from "react";
import '../Styles/Table.css'

//Search doctor user story
const SearchDoctor = (props) => {
    const specialityOptions = ["Orthodontist", "Opthalmologist", "Paediatrician", "Gastroentrologist", "Cardiologist"];
    const [localState, setLocalState] = useState({ speciality: "" });

    const handleChange = (e) => {
        e.preventDefault();
        setLocalState({ ...localState, [e.target.name]: e.target.value });
        console.log(setLocalState);
        console.log(e.target.value);
        console.log(e.target.name);
    };

    const searchDoctor = (e) => {
        e.preventDefault();
        props.searchDoctor(localState.speciality);
    }


    
    // Delete Doctor user story

    const [localState1, setLocalState1] = useState({ doctorNumber: "" });

    const handleChange1 = (e) => {
        e.preventDefault();
        setLocalState1({ ...localState1, doctorNumber: e.target.value });

    };


    const deleteDoctor = () => {
        //e.preventDefault();
        props.deleteDoctor(localState1.doctorNumber)

    }



    return (
        <div>
            <h1 style={{ color: "skyblue",textAlign:"center" }}>Doctor Search Form</h1>

                <form>

                    <div style={{ border: "4px solid skyblue" }}>
                            <label style={{ margin: "20px" }}>SPECIALITY</label>
                            <select name="speciality" value={localState.value} onChange={handleChange}>
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
                                    <th>DOCTOR NUMBER</th>
                                    <th>NAME</th>
                                    <th>QUALIFICATION</th>
                                    <th>SPECIALITY</th>
                                    <th>EDIT ACTION</th>
                                    <th>DELETE ACTION</th>
                                </tr>
                                
                              {/* {props.doctorData && props.doctorData.searchDoctorSuccess} */}
                              {props.doctorData.searchResults ? props.doctorData.searchResults.map((item, key) => <tr><td> {item.doctorNumber}</td><td> {item.name}</td><td> {item.qualification}
                    </td><td>{item.speciality} </td><td><button>EDIT</button></td><td><button onClick={(e) => deleteDoctor(item.doctorNumber)} >DELETE</button></td></tr>) : ""}
                           
                            </table> 


                    </div>
                </form>



                {/* 
            <form>
                Doctor Number:<input type="number" name="doctorNumber" value={localState.doctorNumber} onChange={handleChange}  /><br/><br/>
                NAME : <input type="text" name="name" value={localState.doctorName} onChange={handleChange}  /><br/><br/>
                Qualification : <input type="text" name="qualification" value={localState.doctorQualification} onChange={handleChange} /><br/><br/>
               speciality:<input type="drop-down" name="speciality" value={localState.doctorspeciality} onChange={handleChange} /><br/><br/>
                <button onClick={addDoctor}>SAVE</button>
            </form> */}
            
        </div>

    )
}


export default SearchDoctor;
