import React, { useContext } from 'react'
import { SongContext } from './SongProvider'
import './Songs.css'

//define props and context
export default ({ song, match, history }) => {
  const { deleteSong } = useContext(SongContext)

  //define user and get there objects
  return (
    <section className='song'>
      <div className='song__title'>{song.title}</div>
      <div className='song__key'>{song.key}</div>

      <button className="edit" className="button"
        onClick={() => {
          history.push(`/songs/edit/${song.id}`)
        }}
      >
        Edit
      </button>

      <button
        className='btn--delete'
        onClick={() => {
          deleteSong(song).then(() => {
            history.push('/songs')
          })
        }}
      >
        Delete
      </button>
    </section>
  )
}
