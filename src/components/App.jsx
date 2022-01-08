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
    }
    
    // Remove Note functionality
    function removeNote(id){
        setAllNotes(prevNotes => {
            return prevNotes.filter((item, index)=>{
                return index != id;
            })
        })
    }

    return <div>
        <Header />
        <CreateNote onAdd={addNote} />

        {allNotes.map((Item, index)=>{
            return ( <Note
                key={index}
                id={index}
                content={allNotes[index]}
                delete={removeNote}
             />
        )})}

        <Footer />
    </div>
}

export default App;