import React, { useState, useEffect } from 'react'

/*
    The context is imported and used by individual components
    that need data
*/
export const InstrumentContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const InstrumentProvider = props => {
  const [theInstruments, setInstruments] = useState([])

  const getInstruments = () => {
    return fetch('http://localhost:8088/instruments')
      .then(res => res.json())
      .then(setInstruments)
  }

  const addInstrument = instrument => {
    return fetch('http://localhost:8088/instruments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(instrument)
    }).then(getInstruments)
  }

  /*
        Load all animals when the component is mounted. Ensure that
        an empty array is the second argument to avoid infinite loop.
    */
  useEffect(() => {
    getInstruments()
  }, [])

  return (
    <InstrumentContext.Provider
      value={{
        theInstruments,
        addInstrument
      }}
    >
      {props.children}
    </InstrumentContext.Provider>
  )
}
