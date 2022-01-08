import React, {useState} from "react";
import DeleteIcon from '@mui/icons-material/Delete';

function Note(props){

    const [crossItem, setCrossItem] = useState(false);
    function strikeThrough(){
        setCrossItem(prevState => !prevState);
    }

    function handleRemoval(){
        props.delete(props.id)
    }

    return (
        <div className="note">
            <div className="actualNote">
                <li onClick={strikeThrough}
                style={crossItem ? {textDecoration:"line-through"}: null}>
                - {props.content}</li>
            </div>
            <DeleteIcon onClick={handleRemoval}/>
        </div>
    )
}



export default Note;