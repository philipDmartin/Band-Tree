import React, { useContext } from 'react'
import { GigContext } from './GigProvider'
import { UserContext } from '../users/UserProvider'
import Gig from './Gig'
import './Gigs.css'

//track the users data and display only what they want to see
export default props => {
  const { user } = useContext(UserContext)
  const { theGigs } = useContext(GigContext)
  const theCurrentUser =
    user.find(u => u.id === parseInt(localStorage.getItem('currentUser'))) || {}
  const theCurrentGigs = theGigs.filter(g => g.bandId === theCurrentUser.bandId)

  return (
    <div className='gigs'>
      <h1>Gigs</h1>
      <button onClick={() => props.history.push('/gigs/create')}>
        Add Gig
      </button>
      <article className='gigList'>
        //map through gigs array
        {theCurrentGigs.map(gig => (
          <Gig key={gig} gig={gig} {...props} />
        ))}
      </article>
    </div>
  )
}
