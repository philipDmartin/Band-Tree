import React, { useContext, useState, useEffect } from "react"
import { SongContext } from "./SongProvider"


export default props => {
    const { addSong, theSongs, updateSong } = useContext(SongContext)
    const [theSong, setSong] = useState({})

    const editMode = props.match.params.hasOwnProperty("songId")

    const handleControlledInputChange = (event) => {
        const newSong = Object.assign({}, theSong)
        newSong[event.target.name] = event.target.value
        
        setSong(newSong)
    }
    const setDefaults = () => {
        if (editMode) {
            const songId = parseInt(props.match.params.songId)
            const selectedSong = theSongs.find(s => s.id === songId) || {}
            console.log(selectedSong, "songs here")
            setSong(selectedSong)
        }
    }
  useEffect(() => {
    console.log(theSong, "song")

  }, [theSong])

    useEffect(() => {
        setDefaults()
    }, [theSongs])

    const constructNewSong = () => {
        const songId = parseInt(theSong.songId)
            if (editMode) {
               
                updateSong({
                    id: theSong.id,
                    title: theSong.title,
                    key: theSong.key,
                    userId: parseInt(localStorage.getItem("bandtree__user"))
                })
                    .then(() => props.history.push("/songs"))
            } else {
             
                addSong({
                    id: theSong.id,
                    title: theSong.title,
                    key: theSong.key,
                    userId: parseInt(localStorage.getItem("bandtree__user"))

                })
                    .then(() => props.history.push("/songs"))
            }
        }
    

     return (
    <form className="eventForm">
            <h2 className="eventForm__title">New Song</h2>

            <div className="form-group">
                <label htmlFor="title">Song Title</label>
                <input
                    type="text"
                    id="title"
                    // ref={title}
                    defaultValue={theSong.title}
                    required
                    autoFocus
                    className="form-control"
                    placeholder="Please Enter Song Title"
                    onChange={handleControlledInputChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="Key">Song Key</label>
                <input
                    type="text"
                    id="key"
                    // ref={key}
                    defaultValue={theSong.key}
                    required
                    autoFocus
                    className="form-control"
                    placeholder="Please Enter Song Key"
                    onChange={handleControlledInputChange}
                />
            </div>

      <button
        type='submit'
        onClick={evt => {
          evt.preventDefault()
          constructNewSong()
        }}
        className='btn btn-primary'
      >
        {editMode ? 'Save Updates' : 'Make Song'}
      </button>
    </form>
  )
}
