import React, { useContext, useRef } from "react"
import { useState, useEffect } from "react"
import { GigContext } from "./GigProvider"
import { UserContext } from "../users/UserProvider"
import "./Gigs.css"

export default props => {
    const { theUser } = useContext(UserContext)
    const { addGig } = useContext(GigContext)
    const gigs = useRef("")

    const foundGigUser = theUser.find(singleUser => singleUser.id === parseInt(localStorage.getItem("currentUser")))
console.log(foundGigUser)
    const constructNewGig = () => {
            addGig({
                gig: gigs.current.value,
                userId: parseInt(localStorage.getItem("currentUser")),
                senderName: foundGigUser.name
            })
        }
    
    return (
        <form className="eventForm">
            <h2 className="eventForm__title">New Gig</h2>
            <div className="form-group">
                <label htmlFor="gigs">Gig</label>
                <input
                    type="text"
                    id="gigs"
                    ref={gigs}
                    required
                    autoFocus
                    className="form-control"
                    placeholder="Gig"
                />
            </div>
            <button type="submit"
                onClick={
                    evt => {
                        evt.preventDefault() // Prevent browser from submitting the form
                        constructNewGig()
                    }
                }
                className="btn btn-primary">
                Save Gig
            </button>
        </form>
    )
}
