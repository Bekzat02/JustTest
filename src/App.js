import './App.css';
import Navbar from "./components/Navbar/Navbar";
import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import AllNotesContainer from "./components/AllNotes/AllNotesContainer";
import CreateNoteContainer from "./components/CreateNote/CreateNoteContainer";
import {Provider} from "react-redux";
import store from "./redux/store";

const App = () => {
    return (
        <BrowserRouter>
         <Provider store={store}>
        <div className='app-wrapper'>
            <Navbar/>
            <div className='app-wrapper-content'>

                <Route path='/all'
                       render={() => <AllNotesContainer/>}/>

                <Route path='/create'
                       render={() => <CreateNoteContainer/>}/>
            </div>
        </div>
         </Provider>
        </BrowserRouter>
    );
}

export default App;
