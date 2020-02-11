import React, { useContext } from "react"
import { GigContext } from "./GigProvider"
import "./Gigs.css"

// import { Link } from "react-router-dom"

export default ({gig, match, history}) => {
    const { theGig, deleteGig } = useContext(GigContext)

    return ( 
    <section className="gig">
         <div className="gig__venue">{gig.venue}</div>
         <div className="gig__date">{gig.date}</div>
         <div className="gig__time">{gig.time}</div>
         {/* <div className="gig__band">{gig.bandId}</div> */}

        <button onClick={() => {
                history.push(`/gigs/edit/${gig.id}`)
            }}>Edit</button>

         <button className="btn--delete"
                onClick={() => {
                deleteGig(gig)
                    .then(() => {
                        history.push("/Gigs")
                     })
                    }} >Delete
            </button>
    </section>
)}
