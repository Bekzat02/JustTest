import {applyMiddleware, combineReducers, createStore} from "redux";
import notesReducer from "./notes-reducer";
import thunkMiddleware from "redux-thunk"

 let reducers = combineReducers({
    notesPage: notesReducer,
})

let store= createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
