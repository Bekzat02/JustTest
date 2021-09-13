import {notesAPI} from "../components/api/api";

const ADD_NOTE = 'ADD-NOTE';


let initialState = {
    notes: [
        {id: 1, name: "Arman", text: "You need to wake up at 12:30", date: "1988-03-21"},
        {id: 2, name: "Beka", text: "You need to wake up at 8:30", date: "1999-03-21"},
        {id: 3, name: "Lampard", text: "You need to wake up at 10:30", date: "2002-06-12"},
    ]
}
const notesReducer = (state=initialState, action) => {
    switch(action.type) {
        case ADD_NOTE: {
            let newNote = {
                id: 4,
                name: action.newName,
                text: action.newText,
                date: "2002-07-09"
            }
            return {
                ...state,
                notes: [...state.notes, newNote],
                newName: '',
                newText: '',
            }
        }
        default:
            return state;
    }
};

export const addNoteActionCreator = (newName, newText) => ({type: ADD_NOTE, newName,newText})

export const addNote = (object,newName,newText) => async (dispatch) => {
    dispatch(addNoteActionCreator(newName,newText));
    notesAPI.sendData(object).then(r => {
        console.log(r)
    })
}

export default notesReducer;
