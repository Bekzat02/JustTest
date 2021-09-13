import React, {Component} from 'react';
import CreateNotes from "./CreateNotes";
import {connect} from "react-redux";
import {addNote} from "../../redux/notes-reducer";
import withRouter from "react-router-dom";

class CreateNoteContainer extends Component {
    onSubmit = (d) => {
        this.props.addNote(d,d.name,d.text)
    }

    render() {
        return (
            <div>
                <CreateNotes onSubmit={this.onSubmit}/>
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return ({
        notes: state.notesPage.notes,
        newName: state.notesPage.newName,
        newText: state.notesPage.newText,
    })
}

export default connect(mapStateToProps, {addNote})(CreateNoteContainer);
