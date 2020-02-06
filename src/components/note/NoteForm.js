import React, { useContext, useState, useEffect } from "react"
import { NoteContext } from "./NoteProvider"
// import { LocationContext } from "../location/LocationProvider"


export default props => {
    // const { locations } = useContext(LocationContext)
    const { addNote, theNotes, updateNote } = useContext(NoteContext)
    const [theNote, setNote] = useState({})

    const editMode = props.match.params.hasOwnProperty("noteId")

    const handleControlledInputChange = (event) => {
        /*
            When changing a state object or array, always create a new one
            and change state instead of modifying current one
        */
        const newNote = Object.assign({}, theNote)
        newNote[event.target.name] = event.target.value
        
        setNote(newNote)
    }
    const setDefaults = () => {
        if (editMode) {
            const noteId = parseInt(props.match.params.noteId)
            const selectedNote = theNotes.find(n => n.id === noteId) || {}
            console.log(selectedNote, "notes here")
            setNote(selectedNote)
        }
    }
  useEffect(() => {
    console.log(theNote, "note")

  }, [theNote])

    useEffect(() => {
        setDefaults()
    }, [theNotes])

    const constructNewNote = () => {
        const noteId = parseInt(theNote.noteId)
            if (editMode) {
               
                updateNote({
                    id: theNote.id,
                    note: theNote.note,
                    userId: parseInt(localStorage.getItem("bandtree__user"))
                })
                    .then(() => props.history.push("/notes"))
            } else {
             
                addNote({
                  id: theNote.id,
                  note: theNote.note,
                  userId: parseInt(localStorage.getItem("bandtree__user"))

                })
                    .then(() => props.history.push("/notes"))
            }
        }
    

     return (
    <form className='eventForm'>
      <h2 className='NoteForm__note'>
        {editMode ? 'Update Note' : 'Admit Note'}
      </h2>

      <div className='form-group'>
        <label htmlFor='note'>Note</label>
        <input
          type='text'
          id='note'
          name='note'
          // ref={theNotes}
          defaultValue={theNote.note}
          required
          autoFocus
          className='form-control'
          placeholder='Please Type Note'
          onChange={handleControlledInputChange}
        />
      </div>

      <button
        type='submit'
        onClick={evt => {
          evt.preventDefault()
          constructNewNote()
        }}
        className='btn btn-primary'
      >
        {editMode ? 'Save Updates' : 'Make Appointment'}
      </button>
    </form>
  )
}