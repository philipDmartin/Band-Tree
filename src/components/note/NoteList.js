import React, { useContext } from "react"
import { NoteContext } from "./NoteProvider"
import Note from "./Note"
import "./Notes.css"

export default (props) => {

    const { theNote } = useContext(NoteContext)
    
console.log(theNote)
    return (
        <div className="notes">
            <h1>Notes</h1>
            <button onClick={() => props.history.push("/notes/create")}>
                Add Note
            </button>
            <article className="noteList">
                {
                    theNote.map(note => <Note key={note} note={note} {...props} />)
                }
            </article>
        </div>
    )    
}
