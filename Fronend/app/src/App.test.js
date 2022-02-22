import App from './App';
import {  mount, shallow } from 'enzyme';
import { render, screen } from '@testing-library/react';
import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import tojson from 'enzyme-to-json';
import { useLocation } from "react-router";

import store from "./store/myStore";
import { Provider } from 'react-redux';
import AddDoctorContainer from './components/AddDoctorContainer';
import DoctorContainer from './components/DoctorContainer';

configure({ adapter: new Adapter() });


describe('test app renders or not', () => {
  test('Chck app comes without any issues', () => {
    shallow(<App />);
  });
});

//ADD DOCTOR TEST CASES
describe('test for add doctor', () => {
  test('App has a single AddDoctorContainer component and has somecontent ADD NEW DOCTOR FORM inside h1 tag', () => {
    const wrapper = mount(<Provider store={store}><AddDoctorContainer /></Provider>);
    const SomeContent = <h1 style={{ color: "skyblue", textAlign: "center" }}> ADD NEW DOCTOR FORM</h1>
    expect(wrapper.contains(SomeContent)).toEqual(true);
  });


  test('App renders the add doctor has 1 h1 element ', () => {
    var wrapper = mount( <Provider store={store}><AddDoctorContainer /></Provider>);
    //this is css selector
    const noOfH1Elements = wrapper.find('h1').length;//returns an array
    expect(noOfH1Elements).toEqual(1);
  });


  test('App renders the add doctor testing props are passed or not', () => {
    var wrapper = mount(<Provider store={store}><AddDoctorContainer name="Dr Joseph" /></Provider>);
    expect(wrapper.contains("Dr Joseph")).toEqual(false);
  });

  test("check addDoctorContainer comes without any issues", () => {
    mount(<Provider store={store}><AddDoctorContainer mode="ADD" /></Provider>);
  });

});


//SEARCH DOCTOR
describe('test for search doctor', () => {
  test('App has a single  search DoctorContainer component and has somecontent  DOCTOR SEARCH FORM inside h1 tag', () => {
    const wrapper = mount(<Provider store={store}><DoctorContainer /></Provider>);
    const SomeContent =  <h1>DOCTOR SEARCH FORM</h1>
    expect(wrapper.contains(SomeContent)).toEqual(true);
  });

  
  test('App renders the search doctor has 1 h1 element ', () => {
    var wrapper = mount( <Provider store={store}><DoctorContainer /> </Provider>);
    //this is css selector
    const noOfH1Elements = wrapper.find('h1').length;//returns an array
    expect(noOfH1Elements).toEqual(1);
  });


  test('App renders the search doctor testing props are passed or not', () => {
    var wrapper = mount(<Provider store={store}><DoctorContainer speciality="Orthodontist" /></Provider>);
    expect(wrapper.contains("Orthodontist")).toEqual(true);
  });

});

//EDIT DOCTOR
describe('test for edit doctor', () => {
  test('App has a single  edit DoctorContainer component ', () => {
    const wrapper = mount(<Provider store={store}><AddDoctorContainer mode="EDIT" qualification="MBBS"/></Provider>);
    expect(wrapper.contains(MBBS)).toEqual(true);
  });
});

//Grouping them into 1 test suit
//Snapshot
describe('Add Doctor snapshot', () => {
  test('Taking snapshot of App', () => {
    const tree = shallow(<Provider store={store}><App /></Provider>);
    expect(tojson(tree)).toMatchSnapshot();
  });


  test('Taking snapshot of SearchDoctor', () => {
    const tree = mount(<Provider store={store}><DoctorContainer /></Provider>);
    expect(tojson(tree)).toMatchSnapshot();
  });

});

