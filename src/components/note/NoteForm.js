import React, { useContext, useState, useEffect } from "react"
import { NoteContext } from "./NoteProvider"
import { BandContext } from "../band/BandProvider"
import {UserContext} from "../users/UserProvider"

export default props => {
    const { addNote, theNotes, updateNote } = useContext(NoteContext)
    const { theBands } = useContext(BandContext)
    const { user } = useContext(UserContext)
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
            setNotes(selectedNote)
        }
    }
  useEffect(() => {
  }, [theNote])

    useEffect(() => {
        setDefaults()
    }, [theNotes])

    const constructNewNote = () => {
        const noteId = parseInt(theNote.noteId)
        const currentUser = parseInt(localStorage.getItem("currentUser"))
        const currentGigUserObject = user.find(u => u.id === currentUser)
        const currentBand = currentGigUserObject.bandId
            if (editMode) {
               
                updateNote({
                    id: theNote.id,
                    note: theNote.note,
                    bandId: currentBand
                })
                    .then(() => props.history.push("/notes"))
            } else {
             
                addNote({
                  id: theNote.id,
                  note: theNote.note,
                  bandId: currentBand

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
