import store from '../store/myStore';
import { Provider } from 'react-redux';
import { mount, configure, render, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import AddDoctorContainer from '../components/AddDoctorContainer';
import DoctorContainer from '../components/DoctorContainer';
import tojson from 'enzyme-to-json';
import { MemoryRouter } from 'react-router-dom'

configure({ adapter: new Adapter() });


//ADD DOCTOR TEST CASES
describe('test for add doctor', () => {
    test("check addDoctorContainer comes without any issues", () => {
        render(<Provider store={store}><AddDoctorContainer mode="EDIT" /></Provider>, { wrapper: MemoryRouter });
    });


    test('App has a single AddDoctorContainer component and has somecontent ADD NEW DOCTOR FORM inside h1 tag', () => {
        const wrapper = mount(<Provider store={store}>
           <AddDoctorContainer />
        </Provider>);
        const SomeContent = <h1 style={{ color: "skyblue", textAlign: "center" }}> ADD NEW DOCTOR FORM</h1>
        expect(wrapper.contains(SomeContent)).toEqual(true);
    });


    test('App renders the add doctor has 1 h1 element ', () => {
        var wrapper = mount(<Provider store={store}>
            <AddDoctorContainer />
        </Provider>);
        //this is css selector
        const noOfH1Elements = wrapper.find('h1').length;//returns an array
        expect(noOfH1Elements).toEqual(1);
    });


    test('App renders the add doctor testing props are passed or not', () => {
        var wrapper = mount(<Provider store={store}><AddDoctorContainer name="Dr Joseph" /></Provider>);
        expect(wrapper.contains("Dr Joseph")).toEqual(false);
    });


});


//SEARCH DOCTOR
describe('test for search doctor', () => {
    test('App has a single  search DoctorContainer component and has somecontent  DOCTOR SEARCH FORM inside h1 tag', () => {
        const wrapper = mount(<Provider store={store}><DoctorContainer /></Provider>);
        const SomeContent = <h1>DOCTOR SEARCH FORM</h1>
        expect(wrapper.contains(SomeContent)).toEqual(true);
    });


    test('App renders the search doctor has 1 h1 element ', () => {
        var wrapper = mount(<Provider store={store}><DoctorContainer /> </Provider>);
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
        const wrapper = mount(<Provider store={store}><AddDoctorContainer mode="EDIT" qualification="MBBS" /></Provider>);
        expect(wrapper.contains(MBBS)).toEqual(true);
    });
});

//Grouping them into 1 test suit
//Snapshot
describe('Add Doctor snapshot', () => {
    test('Taking snapshot of App', () => {
        const tree =mount(<Provider store={store}><AddDoctorContainer /></Provider>, { wrapper: MemoryRouter });
        expect(tojson(tree)).toMatchSnapshot();
    });
});

