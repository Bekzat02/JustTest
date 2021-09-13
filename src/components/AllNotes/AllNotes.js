import React from 'react';
import NoteItem from "../CreateNote/NoteItem";

const AllNotes = (props) => {
    let dialogsElements = props?.notes?.map( d => <NoteItem name={d.name} key={d.id} id={d.id} text={d.text} date={d.date} /> || null );

    return (
        <div>
            {dialogsElements}
        </div>
    );
};

export default AllNotes;
