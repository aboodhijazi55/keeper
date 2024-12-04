import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import { Zoom } from "@mui/material";

function CreateArea(props) {
    const [isExpanded, setExpanded] = useState(false)


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
    function expand() {
        setExpanded(true)
    }
    return (
        <div>
            <form className="create-note" >
                {isExpanded ? <input onChange={handelChange} name="title" placeholder="Title" value={note.title} /> : null}
                <textarea onClick={expand}
                    onChange={handelChange}
                    name="content" placeholder="Take a note..."
                    rows={isExpanded ? 3 : 1}
                    value={note.content} />
                <Zoom in={isExpanded ? true : false}>
                    <Fab onClick={handelSub} ><AddIcon /></Fab>
                </Zoom>
            </form>
        </div>
    );
}



export default CreateArea