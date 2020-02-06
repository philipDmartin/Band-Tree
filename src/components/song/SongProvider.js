import React, { useState, useEffect } from "react"

export const SongContext = React.createContext()

export const SongProvider = (props) => {
    const [theSong, setSongs] = useState([])

    const getSongs = () => {
        return fetch("http://localhost:8088/songs")
            .then(res => res.json())
            .then(setSongs)
    }

    const addSong = song => {
        return fetch("http://localhost:8088/songs", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(song)
        })
            .then(getSongs)
    }

    const deleteSong = song => {
        return fetch(`http://localhost:8088/songs/${song.id}`, {
            method: "DELETE"
        })
        .then(getSongs)
    }

    const updateSong = song => {
        return fetch(`http://localhost:8088/songs/${song}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(song)
        })
            .then(getSongs)
    }

    useEffect(() => {
        getSongs()
    }, [])

    useEffect(() => {
        console.log(theSong)
        console.log("songs app state changed")
        // if (checkedMessages.length == messages.length){
        //     console.log("time to get messages")
        // }
    }, [theSong])
      
    return (
        <SongContext.Provider value={{
            theSong, addSong, deleteSong, updateSong
        }}>
            {props.children}
        </SongContext.Provider>
    )
}
