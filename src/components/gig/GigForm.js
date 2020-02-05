import React, { useContext, useRef } from "react"
import { useState, useEffect } from "react"
import { GigContext } from "./GigProvider"
import { UserContext } from "../users/UserProvider"
import "./Gigs.css"

export default props => {
    const { user } = useContext(UserContext)
    const { addGig } = useContext(GigContext)
    const gigs = useRef("")
    const venues = useRef("")
    const dates = useRef("")
    const times = useRef("")

    const foundGigUser = user.find(singleUser => singleUser.id === parseInt(localStorage.getItem("currentUser")))
console.log(foundGigUser)
    const constructNewGig = () => {
            addGig({
                venue: venues.current.value,
                date: dates.current.value,
                time: times.current.value,
            })
        }
    
    return (
        <form className="eventForm">
            <h2 className="eventForm__title">New Gig</h2>

            <div className="form-group">
                <label htmlFor="venue">Venue</label>
                <input
                    type="text"
                    id="venue"
                    ref={venues}
                    required
                    autoFocus
                    className="form-control"
                    placeholder="Please Enter Venue"
                />
            </div>
            <div className="form-group">
                <label htmlFor="date">Date</label>
                <input
                    type="text"
                    id="date"
                    ref={dates}
                    required
                    autoFocus
                    className="form-control"
                    placeholder="Please Enter Date"
                />
            </div>
            <div className="form-group">
                <label htmlFor="time">Time</label>
                <input
                    type="text"
                    id="time"
                    ref={times}
                    required
                    autoFocus
                    className="form-control"
                    placeholder="Please Enter Time"
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
