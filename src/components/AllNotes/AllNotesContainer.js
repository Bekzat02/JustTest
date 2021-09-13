import React, {Component} from 'react';
import AllNotes from "./AllNotes";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

class AllNotesContainer extends Component {
    render() {
        return (
            <div>
                <AllNotes notes={this.props.notes} />
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
const WithRouter = withRouter(AllNotesContainer)

export default connect(mapStateToProps)(WithRouter);
