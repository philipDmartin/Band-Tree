import React, { useContext } from "react"
import { NoteContext } from "./NoteProvider"
import "./Notes.css"

// import { Link } from "react-router-dom"

export default ({note, match, history}) => {
    const { theNote, deleteNote } = useContext(NoteContext)

    return (
    <section className="note">
         <div className="note__note">{note.note}</div>
         {/* <div className="note__band">{note.bandId}</div> */}

        <button onClick={() => {
                history.push(`/notes/edit/${note.id}`)
            }}>Edit</button>

            <button className="btn--delete"
                onClick={() => {
                deleteNote(note)
                    .then(() => {
                        history.push("/notes")
                     })
                    }} >Delete
            </button>
    </section>
)}
