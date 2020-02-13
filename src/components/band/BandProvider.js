import React, { useState, useEffect } from 'react'

export const BandContext = React.createContext()

//write a function to fetch all band data
export const BandProvider = props => {
  const [theBands, setBands] = useState([])

  const getBands = () => {
    return fetch('http://localhost:8088/bands')
      .then(res => res.json())
      .then(setBands)
  }

  const addBand = band => {
    return fetch('http://localhost:8088/bands', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(band)
    }).then(getBands)
  }

  const deleteBand = band => {
    return fetch(`http://localhost:8088/bands/${band.id}`, {
      method: 'DELETE'
    }).then(getBands)
  }

  const updateBand = band => {
    return fetch(`http://localhost:8088/bands/${band.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(band)
    }).then(getBands)
  }

  //define useEffect for other component
  useEffect(() => {
    getBands()
  }, [])

  useEffect(() => {}, [theBands])

  //return all fetch call methods
  return (
    <BandContext.Provider
      value={{
        theBands,
        addBand,
        deleteBand,
        updateBand
      }}
    >
      {props.children}
    </BandContext.Provider>
  )
}
