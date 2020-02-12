import React, { useContext } from "react"
import { NoteContext } from "./NoteProvider"
import { UserContext } from "../users/UserProvider"
import Note from "./Note"
import "./Notes.css"

export default (props) => {
    const {user} = useContext(UserContext)
    const { theNotes } = useContext(NoteContext)
    const theCurrentUser = user.find(u => u.id === parseInt (localStorage.getItem("currentUser"))) || {}
    const theCurrentNotes = theNotes.filter(n => n.bandId === theCurrentUser.bandId)

    return (
        <div className="notes">
            <h1>Notes</h1>
            <button onClick={() => props.history.push("/notes/create")}>
                Add Note
            </button>
            <article className="noteList">
                {
                    theCurrentNotes.map(note => <Note key={note} note={note} {...props} />)
                }
            </article>
        </div>
    )    
}
