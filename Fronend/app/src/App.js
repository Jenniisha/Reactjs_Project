import { Route, Routes } from "react-router";
import './App.css';
import NavBar from "./components/NavBar";

import DoctorContainer from "./components/DoctorContainer";
import store from "./store/myStore";
import { Provider } from 'react-redux';
import NoPageFound from "./components/NoPageFound";


// import SimpleNodeLogger from 'simple-node-logger';
// const opts = {
//   logFilePath: 'mylogfile.log',
//   timestampFormat: 'YYYY-MM-DD HH:mm:ss.SSS'
// };
// const log = SimpleNodeLogger.createSimpleLogger(opts);


function App() {
  return (
    <Provider store={store}>
      <Routes>

        <Route path="/" element={<Home />} />
        {/* <Route path="/doctors/add" element={<AddDoctors />} />
        <Route path="/doctors/edit" element={<EditDoctors />} /> */}
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