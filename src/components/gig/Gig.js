import React, { useContext } from 'react'
import { GigContext } from './GigProvider'
import './Gigs.css'

//define props and context
export default ({ gig, match, history }) => {
  const { deleteGig } = useContext(GigContext)

  //define user and get there objects
  return (
    <section className='gig'>
      <div className='gig__venue'>{gig.venue}</div>
      <div className='gig__date'>{gig.date}</div>
      <div className='gig__time'>{gig.time}</div>

      <button
        onClick={() => {
          history.push(`/gigs/edit/${gig.id}`)
        }}
      >
        Edit
      </button>

      <button
        className='btn--delete'
        onClick={() => {
          deleteGig(gig).then(() => {
            history.push('/Gigs')
          })
        }}
      >
        Delete
      </button>
    </section>
  )
}
