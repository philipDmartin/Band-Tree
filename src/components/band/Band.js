import React from 'react'

//define user and get there objects
export default ({ user }) => (
  <section className='user'>
    <h3 className='user__name'>{user.name}</h3>
    <h3 className='user__ins'>{user.instrument.instrument}</h3>
    <h3 className='user__band'>{user.band.name}</h3>
  </section>
)
