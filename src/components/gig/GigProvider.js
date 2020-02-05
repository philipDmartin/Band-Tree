import React, { useState, useEffect } from "react"

export const GigContext = React.createContext()

export const GigProvider = (props) => {
    const [theGig, setGigs] = useState([])

    const getGigs = () => {
        return fetch("http://localhost:8088/gigs")
            .then(res => res.json())
            .then(setGigs)
    }

    const addGig = gig => {
        return fetch("http://localhost:8088/gigs", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(gig)
        })
            .then(getGigs)
    }

    const deleteGig = gig => {
        return fetch(`http://localhost:8088/gigs/${gig.id}`, {
            method: "DELETE"
        })
        .then(getGigs)
    }

    const updateGig = gig => {
        return fetch(`http://localhost:8088/gigs/${gig}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(gig)
        })
            .then(getGigs)
    }

    useEffect(() => {
        getGigs()
    }, [])

    useEffect(() => {
        console.log(theGig)
        console.log("gigs app state changed")
        // if (checkedMessages.length == messages.length){
        //     console.log("time to get messages")
        // }
    }, [theGig])

    return (
        <GigContext.Provider value={{
            theGig, addGig, deleteGig, updateGig
        }}>
            {props.children}
        </GigContext.Provider>
    )
}
