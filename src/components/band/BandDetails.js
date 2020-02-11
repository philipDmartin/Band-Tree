// import React, { useContext } from 'react'
// import { BandContext } from '../band/BandProvider'
// import { InstrumentContext } from '../instrument/InstrumentProvider'
// import { UserContext } from '../users/UserProvider'
 
// export default props => {
//   const { user } = useContext(UserContext)
//   const { theBands } = useContext(BandContext)
//   const { theInstruments } = useContext(InstrumentContext)

//   const chosenUserId = parseInt(props.match.params.userId, 10)

//   const theUser = user.find(use => use.id === chosenUserId) || {}
//   const Bands = theBands.find(ban => ban.id === user.bandsId) || {}
//   const Instruments = theInstruments.find(ins => ins.id === user.instrumentId) || {}
 
//   return (
//     <section className='user'>
//       <h3 className='user__name'>{user.name}</h3>
//       <div className='user__instrumentId'>{user.instrumentId}</div>
//       <div className='user__bandId'>{user.bandId}</div>
//     </section>
//   )
// }
