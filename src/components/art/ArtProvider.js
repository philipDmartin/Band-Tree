// import React, { useState, useEffect } from 'react'

// export const ArtContext = React.createContext()

// export const ArtProvider = props => {
//   const [theArts, setArts] = useState([])

//   const getArts = () => {
//     return fetch('http://localhost:8088/arts')
//       .then(res => res.json())
//       .then(setArts)
//   }

//   const addArt = art => {
//     return fetch('http://localhost:8088/arts', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(art)
//     }).then(getArts)
//   }

//   useEffect(() => {
//     getArts()
//   }, [])

//   useEffect(() => {}, [theArts])

//   return (
//     <ArtContext.Provider
//       value={{
//         theArts,
//         addArt
//       }}
//     >
//       {props.children}
//     </ArtContext.Provider>
//   )
// }
