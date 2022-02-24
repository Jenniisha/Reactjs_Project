import { Route, Routes, Router } from "react-router";
import './App.css';
import Home from './components/Home';

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
        <Route path="/doctors/add" element={<AddDoctorContainer mode="ADD" />} />
        <Route path="/doctors/edit/" element={<AddDoctorContainer mode="EDIT" />} />
        <Route path="/doctors/search/speciality/" element={<DoctorContainer />} />
        <Route path="*" element={<NoPageFound />} />
      </Routes>


    </Provider>



  );
};




export default App;