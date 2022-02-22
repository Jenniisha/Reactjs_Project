import { Route, Routes } from "react-router";
import './App.css';
import NavBar from "./components/NavBar";

import DoctorContainer from "./components/DoctorContainer";
import store from "./store/myStore";
import { Provider } from 'react-redux';
import NoPageFound from "./components/NoPageFound";
import AddDoctorContainer from "./components/AddDoctorContainer";




function App() {
  return (
    <Provider store={store}>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/doctors/add" element={<AddDoctorContainer mode="ADD"/>} />
      <Route path="/doctors/edit/" element={<AddDoctorContainer mode="EDIT"/>} /> 
        <Route path="/doctors/search/speciality/" element={<DoctorContainer />} />
        <Route path="*" element={<NoPageFound />} />
      </Routes>


    </Provider>



  );
};

function Home() {
  return (
    <div>
      <NavBar /><br />
      <h1 style={{ textAlign: "center",color:"skyblue"}}>WELCOME TO  CLINIC MANAGEMENT SYSTEM</h1>
    </div>

  )
}


export default App;