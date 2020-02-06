import React, { useContext } from "react"
import { SongContext } from "./SongProvider"
import Song from "./Song"
import "./Songs.css"

export default (props) => {

    const { theSong } = useContext(SongContext)
    
console.log(theSong)
    return (
        <div className="songs">
            <h1>Set Lists</h1>
            <button onClick={() => props.history.push("/Songs/create")}>
                Add Song
            </button>
            <article className="songList">
                {
                    theSong.map(song => <Song key={song} song={song} {...props} />)
                }
            </article>
        </div>
    )    
} 
