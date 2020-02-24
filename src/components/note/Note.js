import React, { useContext } from 'react'
import { NoteContext } from './NoteProvider'
import './Notes.css'

//define props and context
export default ({ note, match, history }) => {
  const { deleteNote } = useContext(NoteContext)

  //define user and get there objects
  return (
    <section className='note'>
      <div className='note__note'>{note.note}</div>

      <button className="button"
        onClick={() => {
          history.push(`/notes/edit/${note.id}`)
        }}
      >
        Edit
      </button>

      <button
        className='btn--delete'
        onClick={() => {
          deleteNote(note).then(() => {
            history.push('/notes')
          })
        }}
      >
        Delete
      </button>
    </section>
  )
}
