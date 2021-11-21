import React from "react";

function Note(props){



    return (
        <div className="note">
            <li>{props.content}</li>
        </div>
    )
}



export default Note;