import React, { useContext } from 'react'
// import { CustomerContext } from '../customer/CustomerProvider'
// import { LocationContext } from '../location/LocationProvider'
import { NoteContext } from './NoteProvider'
import './Notes.css'
 
export default props => {
  const { theNotes, deleteNote } = useContext(NoteContext)
//   const { theLocations } = useContext(LocationContext)
//   const { theCustomers } = useContext(CustomerContext)

  const chosenNoteId = parseInt(props.match.params.noteId, 10)

  const theNote = theNotes.find(not => not.id === chosenNoteId) || []
//   const theCustomer = theCustomers.find(cus => cus.id === theAnimal.customerId) || {}
//   const theLocation = theLocations.find(loc => loc.id === theAnimal.locationId) || {}

  return (
    <section className='note'>
      <h3 className='note__note'>{theNote.note}</h3>

      {/* <button
        onClick={() => {
          props.history.push(`/notes/edit/${theNote.id}`)
        }}> Edit
      </button> */}

      {/* <button
        onClick={() => {
          releaseAnimal(theAnimal.id).then(() => {
            props.history.push('/animals')
          })
        }}
      >
        Release Animal
      </button> */}
    </section>
  )
}
