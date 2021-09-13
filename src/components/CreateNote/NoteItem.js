import React from 'react';
import {NavLink} from "react-router-dom";

const NoteItem = (props) => {
    let path = "/notes/" + props.id;

    return <div>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

export default NoteItem;
