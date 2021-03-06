import React, { useContext } from 'react'
import { SongContext } from './SongProvider'
import { UserContext } from '../users/UserProvider'
import Song from './Song'
import './Songs.css'

//track the users data and display only what they want to see
export default props => {
  const { user } = useContext(UserContext)
  const { theSongs } = useContext(SongContext)
  const theCurrentUser =
    user.find(u => u.id === parseInt(localStorage.getItem('currentUser'))) || {}
  const theCurrentSongs = theSongs.filter(
    s => s.bandId === theCurrentUser.bandId
  )

  return (
    
    <div className='songs'>
      <h1 className="title">Set Lists</h1>
      <button onClick={() => props.history.push('/songs/create')}>
        Add Song
      </button>
      <article className='songList'>
        {theCurrentSongs.map(song => (
          <Song key={song} song={song} {...props} />
        ))}
      </article>
    </div>
  )
}
