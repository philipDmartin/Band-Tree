import React, { useState, useEffect } from 'react'

export const UserContext = React.createContext()

export const UserProvider = props => {
  const [user, setUsers] = useState([])

  const getUsers = () => {
    return fetch('http://localhost:8088/users?_expand=band&_expand=instrument')
      .then(res => res.json())
      .then(parsedUsers => {
        setUsers(parsedUsers)
      })
  }

  const addUser = user => {
    return fetch('http://localhost:8088/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    }).then(getUsers)
  }

  useEffect(() => {
    getUsers()
  }, [])

  useEffect(() => {}, [user])

  return (
    <UserContext.Provider
      value={{
        user,
        addUser
      }}
    >
      {props.children}
    </UserContext.Provider>
  )
}
