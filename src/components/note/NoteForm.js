import React, { useContext, useState, useEffect } from "react"
import { NoteContext } from "./NoteProvider"

export default props => {
    const { addNote, theNotes, updateNote } = useContext(NoteContext)
    const [theNote, setNotes] = useState({})

    const editMode = props.match.params.hasOwnProperty("noteId")

    const handleControlledInputChange = (event) => {
        const newNote = Object.assign({}, theNote)
        newNote[event.target.name] = event.target.value
        
        setNotes(newNote)
    }
    const setDefaults = () => {
        if (editMode) {
            const noteId = parseInt(props.match.params.noteId)
            const selectedNote = theNotes.find(n => n.id === noteId) || {}
            console.log(selectedNote, "notes here")
            setNotes(selectedNote)
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
                    bandId: parseInt(localStorage.getItem("bandtree__user"))
                })
                    .then(() => props.history.push("/notes"))
            } else {
             
                addNote({
                  id: theNote.id,
                  note: theNote.note,
                  bandId: parseInt(localStorage.getItem("bandtree__user"))

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
        {editMode ? 'Save Updates' : 'Make Note'}
      </button>
    </form>
  )
}
