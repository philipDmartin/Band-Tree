import React, { useContext } from "react"
import { SongContext } from "./SongProvider"
import Song from "./Song"
import "./Songs.css"

export default (props) => {

    const { theSongs } = useContext(SongContext)
    
console.log(theSongs)
    return (
        <div className="songs">
            <h1>Set Lists</h1>
            <button onClick={() => props.history.push("/Songs/create")}>
                Add Song
            </button>
            <article className="songList">
                {
                    theSongs.map(song => <Song key={song} song={song} {...props} />)
                }
            </article>
        </div>
    )    
} 
