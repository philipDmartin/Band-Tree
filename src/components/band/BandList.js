import React, { useContext } from 'react'
import { UserContext } from '../users/UserProvider'
import Band from './Band'

//write a function that displays the current users info based on what band they are aprt of
export default () => {
  const { user } = useContext(UserContext)
  const theCurrentUser =
    user.find(u => u.id === parseInt(localStorage.getItem('currentUser'))) || {}
  const theCurrentUsers = user.filter(u => u.bandId === theCurrentUser.bandId)

  //map through the current user and return there Id and bandId
  return (
    <div className='users'>
      {theCurrentUsers.map(use => (
        <Band key={use.id} user={use} />
      ))}
    </div>
  )
}
