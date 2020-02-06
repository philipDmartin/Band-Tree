import React, { useContext, useRef } from "react"
import { useState, useEffect } from "react"
import { SongContext } from "./SongProvider"
import { UserContext } from "../users/UserProvider"
import "./Songs.css"

export default props => {
    const { user } = useContext(UserContext)
    const { addSong } = useContext(SongContext)
    const title = useRef("")
    const key = useRef("")

    const foundSongUser = user.find(singleUser => singleUser.id === parseInt(localStorage.getItem("currentUser")))
console.log(foundSongUser)
    const constructNewSong = () => {
            addSong({
                title: title.current.value,
                key: key.current.value,
            })
        }
    
    return (
        <form className="eventForm">
            <h2 className="eventForm__title">New Song</h2>

            <div className="form-group">
                <label htmlFor="title">Song Title</label>
                <input
                    type="text"
                    id="title"
                    ref={title}
                    required
                    autoFocus
                    className="form-control"
                    placeholder="Please Enter Song Title"
                />
            </div>
            <div className="form-group">
                <label htmlFor="Key">Song Key</label>
                <input
                    type="text"
                    id="key"
                    ref={key}
                    required
                    autoFocus
                    className="form-control"
                    placeholder="Please Enter Song Key"
                />
            </div>
           
            <button type="submit"
                onClick={
                    evt => {
                        evt.preventDefault() // Prevent browser from submitting the form
                        constructNewSong()
                    }
                } 
                className="btn btn-primary">
                Save Song
            </button>
        </form>
    )
}
