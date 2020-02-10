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
         <div className="song__band">{song.bandId}</div>

        <button onClick={() => {
                history.push(`/songs/edit/${song.id}`)
            }}>Edit</button>

         <button className="btn--delete"
                onClick={() => {
                deleteSong(song)
                    .then(() => {
                        history.push("/songs")
                     })
                    }} >Delete
            </button>
    </section>
)} 

























//  <form className="eventForm">
//             <h2 className="eventForm__title">New Song</h2>

//             <div className="form-group">
//                 <label htmlFor="title">Song Title</label>
//                 <input
//                     type="text"
//                     id="title"
//                     ref={title}
//                     required
//                     autoFocus
//                     className="form-control"
//                     placeholder="Please Enter Song Title"
//                 />
//             </div>
//             <div className="form-group">
//                 <label htmlFor="Key">Song Key</label>
//                 <input
//                     type="text"
//                     id="key"
//                     ref={key}
//                     required
//                     autoFocus
//                     className="form-control"
//                     placeholder="Please Enter Song Key"
//                 />
//             </div>
