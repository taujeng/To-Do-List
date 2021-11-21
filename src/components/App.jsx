import React, {useState} from "react";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";
import CreateNote from "./CreateNote";

function App(){

    const [allNotes, setAllNotes] = useState([]);

    //
    function addNote(newNote){
        setAllNotes(prevNote=>{
            return [...prevNote, newNote]
        })
        console.log(allNotes);
    }

    return <div>
        <Header />
        <CreateNote onAdd={addNote} />

        {allNotes.map((Item, index)=>{
            return ( <Note
                key={index}
                index={index}
                content={allNotes[index]}
             />
        )})}

        <Footer />
    </div>
}

export default App;