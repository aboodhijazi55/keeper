import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import { Zoom } from "@mui/material";
function CreateArea(props) {
    const [note, setNote] = useState({
        title: "",
        content: ""
    })

    function handelChange(event) {
        const { name, value } = event.target

        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            }
        })
    }
    function handelSub(event) {
        props.onAdd(note)
        setNote({
            title: "",
            content: ""
        })
        event.preventDefault()

    }
    return (
        <div>
            <form onSubmit={handelSub}>
                <input onChange={handelChange} name="title" placeholder="Title" value={note.title} />
                <textarea onChange={handelChange} name="content" placeholder="Take a note..." rows="3" value={note.content} />
                <button >Add</button>
            </form>
        </div>
    );
}



export default CreateArea