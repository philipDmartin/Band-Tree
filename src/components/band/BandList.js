import React, { useContext } from 'react'
import { UserContext } from '../users/UserProvider'
import { ArtContext } from '../art/ArtProvider'
import Band from './Band'

//write a function that displays the current users info based on what band they are aprt of
export default (props) => {
  const { user } = useContext(UserContext)
  // const {art} = useContext(ArtContext)

  const theCurrentUser =
    user.find(u => u.id === parseInt(localStorage.getItem('currentUser'))) || {}
  const theCurrentUsers = user.filter(u => u.bandId === theCurrentUser.bandId)
  // const kind = arts.find(ar => ar.id === user.artId)
  //map through the current user and return there Id and bandId
  return (
    
    <div className='users'>
      <h1 className="title">Your Tree</h1>
      {theCurrentUsers.map(use => 
      (
        <Band key={use.id} user={use}/>
      ))}
    </div>

  )
}
