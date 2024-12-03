import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
    const [renderNotes, setReanderNote] = useState([])


    function addNote(note) {
        setReanderNote(prevNote => {
            return [...prevNote, note]
        })
    }
    function deleteNote(id) {
        setReanderNote(prevNote => {
            return prevNote.filter((x, index) => {
                return index !== id
            })
        })

    }
    return (
        <div>
            <Header />
            <CreateArea onAdd={addNote} />
            {renderNotes.map((noteItem, index) => {
                return <Note key={index}
                    id={index}
                    title={noteItem.title}
                    content={noteItem.content}
                    onDelete={deleteNote} />
            })}
            <Footer />
        </div>
    );
}

export default App;
