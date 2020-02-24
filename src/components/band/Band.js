import React from 'react'

//define user and get there objects
export default ({ user, arts }) => (
  <section className='user'>
    
    <h3 className='user__name'>{user.name}</h3>    
    <img className="art" src={user.instrument.artclip} alt="anything"/>
    <h3 className='user__band'>{user.band.name}</h3>
  </section>
)
