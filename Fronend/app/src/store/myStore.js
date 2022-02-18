import {createStore, combineReducers, applyMiddleware} from 'redux';

import rootSaga from '../sagas/helloSaga';

import {composeWithDevTools} from 'redux-devtools-extension';



// lest import the required middleware library
//first lets install npm install redux-saga
import createSagaMiddleware from 'redux-saga';

// saga is not the only middleware. there is another called Redux Thunk and a few others.
// but saga is good for big projects coz it use promises
// Redux Thunk has drawbacks-callback hell!

const sagaMiddleware = createSagaMiddleware();


const rootReducer = combineReducers({
    reducer1:playerReducer,
    
});
const store = createStore(
    // PlayerReducer,
    rootReducer,composeWithDevTools(applyMiddleware(sagaMiddleware))// we are introducing middleware here
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

export default store;

// middleware config is done! lets create a saga file and use it 
// run the saga middleware
sagaMiddleware.run(rootSaga);
//once the middleware runs, it will call our helloSaga.
//whenever any action is dispatched to any reducer

//lets see the action here itself
// i am going to dispatch any action. say "ADD_ONE"action
store.dispatch({type:"ADD_A_PLAYER"});