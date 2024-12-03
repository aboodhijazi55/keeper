import React from "react";
import Header from "./Header"
import Note from "./Note"
import Footer from "./Footer"
import notes from "../notes.js"



function App() {
    return <div>
        <Header />
        {notes.map((props) => { return <Note key={props.key} title={props.title} content={props.content} /> })}
        <Footer />
    </div>
}
export default App