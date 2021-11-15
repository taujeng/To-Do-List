import React, {useState} from "react";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Zoom from '@mui/material/Zoom';

function CreateNote(){

    const [note, setNote] = useState("");
    const [wasClick, setWasClick] = useState("false");

    function handleChange(event){
        let currentNote = event.target.value;
        setNote(currentNote);
    }

    function clickChange(){
        setWasClick(true);
    }

    function submitNote(){
        return
    }





  return (
    <div>
      <form className="create-note">
        <textarea
          name="content"
          onChange={handleChange}
          onClick={clickChange}
          value={note.content}
          placeholder="What should I do today..."
          rows="1"
        />
        <Zoom in={wasClick ? true : false}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
    );
}

export default CreateNote;