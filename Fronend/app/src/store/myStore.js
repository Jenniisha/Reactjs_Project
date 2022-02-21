import { createStore, combineReducers, applyMiddleware } from 'redux';
import rootSaga from '../sagas/DoctorSaga';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import DoctorReducer from '../reducers/DoctorReducer';


const sagaMiddleware = createSagaMiddleware();


const rootReducer = combineReducers({
    reducer1: DoctorReducer,

});
const store = createStore(
    rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware))
    
);

export default store;

// middleware config is done! lets create a saga file and use it 
// run the saga middleware

sagaMiddleware.run(rootSaga);

//once the middleware runs, it will call our helloSaga.
//whenever any action is dispatched to any reducer

// //lets see the action here itself
// // i am going to dispatch any action. say "SEARCH_DOCTOR_SUCCESSFUL"action
// store.dispatch({type:"SEARCH_DOCTOR_SUCCESSFUL"});