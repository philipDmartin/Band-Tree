//importing providers to send over data, react methods to use state and effect
import React, { useContext, useState, useEffect } from 'react'
import { GigContext } from './GigProvider'
import { UserContext } from '../users/UserProvider'

//define state and context names
export default props => {
  const { addGig, theGigs, updateGig } = useContext(GigContext)
  const { user } = useContext(UserContext)
  const [theGig, setGigs] = useState({})

  const editMode = props.match.params.hasOwnProperty('gigId')

  //track change when user types in inputfield
  const handleControlledInputChange = event => {
    const newGig = Object.assign({}, theGig)
    newGig[event.target.name] = event.target.value

    setGigs(newGig)
  }
  //fing id for edit mode
  const setDefaults = () => {
    if (editMode) {
      const gigId = parseInt(props.match.params.gigId)
      const selectedGig = theGigs.find(g => g.id === gigId) || {}
      setGigs(selectedGig)
    }
  }
  useEffect(() => {}, [theGig])

  useEffect(() => {
    setDefaults()
  }, [theGigs])

  //write a function to find specific objects for entering a new gig
  const constructNewGig = () => {
    const gigId = parseInt(theGig.gigId)
    const currentUser = parseInt(localStorage.getItem('currentUser'))
    const currentGigUserObject = user.find(u => u.id === currentUser)
    const currentBand = currentGigUserObject.bandId

    if (editMode) {
      updateGig({
        id: theGig.id,
        venue: theGig.venue,
        date: theGig.date,
        time: theGig.time,
        bandId: currentBand
      }).then(() => props.history.push('/gigs'))
    } else {
      addGig({
        id: theGig.id,
        venue: theGig.venue,
        date: theGig.date,
        time: theGig.time,
        bandId: currentBand
      }).then(() => props.history.push('/gigs'))
    }
  }

  return (
    <form className='eventForm'>
      <h2 className='GigForm__Gig'>{editMode ? 'Update Gig' : 'Admit Gig'}</h2>

      <div className='form-group'>
        <label htmlFor='venue'>Venue</label>
        <input
          type='text'
          id='venue'
          name='venue'
          defaultValue={theGig.venue}
          required
          autoFocus
          className='form-control'
          placeholder='Please Enter Venue'
          onChange={handleControlledInputChange}
        />
      </div>
      <div className='form-group'>
        <label htmlFor='date'>Date</label>
        <input
          type='text'
          id='date'
          name='date'
          // ref={dates}
          defaultValue={theGig.date}
          required
          autoFocus
          className='form-control'
          placeholder='Please Enter Date'
          onChange={handleControlledInputChange}
        />
      </div>
      <div className='form-group'>
        <label htmlFor='time'>Time</label>
        <input
          type='text'
          id='time'
          name='time'
          // ref={times}
          defaultValue={theGig.time}
          required
          autoFocus
          className='form-control'
          placeholder='Please Enter Time'
          onChange={handleControlledInputChange}
        />
      </div>
      <button
        type='submit'
        onClick={evt => {
          evt.preventDefault()
          constructNewGig()
        }}
        className='btn btn-primary'
      >
        {editMode ? 'Save Updates' : 'Make Gig'}
      </button>
    </form>
  )
}
