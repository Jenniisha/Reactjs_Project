import App from '../App';
import {shallow, configure } from 'enzyme';
import tojson from 'enzyme-to-json';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
configure({ adapter: new Adapter() });


test('two plus two is four', () => {
  expect(2 + 2).toBe(4);
});


describe('test app renders or not', () => {
  test('Chck app comes without any issues', () => {
    shallow(<App />);
  });
});

describe('Basic App rendering test cases 1', () => {
  test('Taking snapshot', () => {
    const tree = shallow(<App />);
    expect(tojson(tree)).toMatchSnapshot();
  });

});