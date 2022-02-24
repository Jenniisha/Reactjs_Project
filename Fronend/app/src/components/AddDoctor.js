import { useState } from "react";
import { useLocation } from "react-router";
import '../Styles/Table.css';

//ADD DOCTOR user story
const AddDoctor = (props) => {
    const specialityOptions = ["Orthodontist", "Opthalmologist", "Paediatrician", "Gastroentrologist", "Cardiologist"];
    const _id= new URLSearchParams(useLocation().search).get('_id');
    const doctorNumber = new URLSearchParams(useLocation().search).get('doctorNumber');
    const name = new URLSearchParams(useLocation().search).get('name');
    const qualification = new URLSearchParams(useLocation().search).get('qualification');
    const speciality = new URLSearchParams(useLocation().search).get('speciality');


    const [localState2, setLocalState2] = useState({_id:_id, doctorNumber: doctorNumber ? doctorNumber : "", name: name ? name : "", qualification: qualification ? qualification : "", speciality: speciality ? speciality : "" });

    const handleChange2 = (e) => {
        e.preventDefault();
        setLocalState2({ ...localState2, [e.target.name]: e.target.value });

    };

    const addDoctor = (e) => {
        e.preventDefault();
        props.addDoctor(localState2);
    }

    const editDoctor = (e) => {
        e.preventDefault();
        props.editDoctor(localState2);
    }


    return (
        <div>
            {props.location}

            {props.doctorData.addDoctorSuccess ? props.doctorData.addDoctorSuccess : ""}<br />
            {props.doctorData.editDoctorSuccess ? props.doctorData.editDoctorSuccess : ""}<br />

            <h1 style={{  textAlign: "center" }}> ADD NEW DOCTOR FORM</h1>
            <div style={{ border: "4px solid skyblue", textAlign: "center" }}>
                <form>

                    Doctor Number:{props.mode === "EDIT" ? <input type="number" name="doctorNumber" value={localState2.doctorNumber} onChange={handleChange2} required disabled /> :
                        <input type="number" name="doctorNumber" value={localState2.doctorNumber} onChange={handleChange2} required />} <br /><br />

                    NAME : {props.mode === "EDIT" ? <input type="text" name="name" value={localState2.name} onChange={handleChange2} disabled required /> :
                        <input type="text" name="name" value={localState2.name} onChange={handleChange2} required />} <br /><br />

                    Qualification : <input type="text" name="qualification" value={localState2.qualification} onChange={handleChange2} required /><br /><br />

                    <label style={{ margin: "20px" }}>SPECIALITY</label>
                    {props.mode === "EDIT" ? <select name="speciality" value={localState2.value} disabled onChange={handleChange2} required>
                        <option value={specialityOptions[0]}>Orthodontist</option>
                        <option value={specialityOptions[1]}>Opthalmologist</option>
                        <option value={specialityOptions[2]}>Paediatrician</option>
                        <option value={specialityOptions[3]}>Gastroentrologist</option>
                        <option value={specialityOptions[4]}>Cardiologist</option>
                    </select> :
                        <select name="speciality" value={localState2.value} onChange={handleChange2} required>
                            <option value={specialityOptions[0]}>Orthodontist</option>
                            <option value={specialityOptions[1]}>Opthalmologist</option>
                            <option value={specialityOptions[2]}>Paediatrician</option>
                            <option value={specialityOptions[3]}>Gastroentrologist</option>
                            <option value={specialityOptions[4]}>Cardiologist</option>
                        </select>}
                    <br /> <br />
                    {props.mode === "ADD" ?  <button onClick={addDoctor}>ADD DOCTOR</button>:
                    <button onClick={editDoctor}>SAVE DOCTOR</button>}
                </form>
            </div>
        </div>

    )
}


export default AddDoctor;
