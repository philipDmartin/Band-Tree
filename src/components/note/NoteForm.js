import React, { useContext, useRef } from 'react'
import { useState, useEffect } from 'react'
import { NoteContext } from './NoteProvider'
import { UserContext } from '../users/UserProvider'
import './Notes.css'

export default props => {
  const { user } = useContext(UserContext)
  const { addNote, updateNote, theNotes } = useContext(NoteContext)
  const [theNote, setNote] = useState([])

  const notes = useRef('')

  const foundNoteUser = user.find(
    singleUser =>
      singleUser.id === parseInt(localStorage.getItem('currentUser'))
  )
//   console.log(foundNoteUser)

  const editMode = props.match.params.hasOwnProperty('noteId')

  const handleControlledInputChange = event => {
    const newNote = Object.assign({}, theNote)
    newNote[event.target.name] = event.target.value
    setNote(newNote)
  }
  const setDefaults = () => {
    if (editMode) {
      const noteId = parseInt(props.match.params.note)
      const selectedNote = theNote.find(n => n.id === notes) || []
      setNote(selectedNote)
    }
  }

  useEffect(() => {
    setDefaults()
  }, [theNotes])

  const constructNewNote = () => {
    const noteId = parseInt(theNote.noteId)

    if (noteId === 0) {
      window.alert('Please select a note')
    } else {
      if (editMode) {
        updateNote({
          note: notes.current.value
        }).then(() => props.history.push('/notes'))
      } else {
        addNote({
          note: theNote.notes
        }).then(() => props.history.push('/notes'))
      }
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
          ref={notes}
          required
          autoFocus
          className='form-control'
          placeholder='Please Type Note'
        />
      </div>

      <button
        type='submit'
        onClick={evt => {
          evt.preventDefault() // Prevent browser from submitting the form
          constructNewNote()
        }}
        className='btn btn-primary'
      >
        Save Note
      </button>

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
