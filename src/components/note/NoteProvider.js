import React, { useState, useEffect } from "react"

export const NoteContext = React.createContext()

export const NoteProvider = (props) => {
    const [theNotes, setNotes] = useState([])

    const getNotes = () => {
        return fetch("http://localhost:8088/notes")
            .then(res => res.json())
            .then(setNotes)
    }

    const addNote = note => {
        return fetch("http://localhost:8088/notes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(note)
        })
            .then(getNotes)
    }

    const deleteNote = note => {
        return fetch(`http://localhost:8088/notes/${note.id}`, {
            method: "DELETE"
        })
        .then(getNotes)
    }

    const updateNote = note => {
        return fetch(`http://localhost:8088/notes/${note.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(note)
        })
            .then(getNotes)
    }

    useEffect(() => {
        getNotes()
    }, [])

    useEffect(() => {
        console.log(theNotes)
        console.log("notes app state changed")
        // if (checkedMessages.length == messages.length){
        //     console.log("time to get messages")
        // }
    }, [theNotes])

    return (
        <NoteContext.Provider value={{
            theNotes, addNote, deleteNote, updateNote
        }}>
            {props.children}
        </NoteContext.Provider>
    )
}
