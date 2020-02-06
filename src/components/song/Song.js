import React, { useContext } from "react"
import { SongContext } from "./SongProvider"
import "./Songs.css"

// import { Link } from "react-router-dom"

export default ({song, match, history}) => {
    const { theSong, deleteSong } = useContext(SongContext)

    return (
    <section className="song">
         <div className="song__title">{song.title}</div>
         <div className="song__key">{song.key}</div>

        <button onClick={() => {
                history.push(`/songs/edit/${song.id}`)
            }}>Edit</button>

         <button className="btn--delete"
                onClick={() => {
                deleteSong(song)
                    .then(() => {
                        history.push("/Songs")
                     })
                    }} >Delete
            </button>
    </section>
)} 
