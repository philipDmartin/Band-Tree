import React, { useContext } from "react"
import { GigContext } from "./GigProvider"
import "./Gigs.css"

// import { Link } from "react-router-dom"

export default ({gig, match, history}) => {
    const { theGig, deleteGig } = useContext(GigContext)

    return (
    <section className="gig">
         <div className="gig__gig">{gig.venue}</div>
         <div className="gig__sender">{gig.date}</div>
         <div className="gig__sender">{gig.time}</div>

        <button onClick={() => {
                history.push(`/gigs/edit/${gig.id}`)
            }}>Edit</button>

         <button className="btn--delete"
                onClick={() => {
                deleteGig(gig)
                    .then(() => {
                        history.push("/")
                     })
                    }} >Delete
            </button>
    </section>
)}
