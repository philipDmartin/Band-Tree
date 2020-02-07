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
















//  return (
//         <form className="eventForm">
//             <h2 className="eventForm__title">New Gig</h2>

//             <div className="form-group">
//                 <label htmlFor="venue">Venue</label>
//                 <input
//                     type="text"
//                     id="venue"
//                     ref={venues}
//                     required
//                     autoFocus
//                     className="form-control"
//                     placeholder="Please Enter Venue"
//                 />
//             </div>
//             <div className="form-group">
//                 <label htmlFor="date">Date</label>
//                 <input
//                     type="text"
//                     id="date"
//                     ref={dates}
//                     required
//                     autoFocus
//                     className="form-control"
//                     placeholder="Please Enter Date"
//                 />
//             </div>
//             <div className="form-group">
//                 <label htmlFor="time">Time</label>
//                 <input
//                     type="text"
//                     id="time"
//                     ref={times}
//                     required
//                     autoFocus
//                     className="form-control"
//                     placeholder="Please Enter Time"
//                 />
//             </div>
//             <button type="submit"
//                 onClick={
//                     evt => {
//                         evt.preventDefault() // Prevent browser from submitting the form
//                         constructNewGig()
//                     }
//                 }
//                 className="btn btn-primary">
//                 Save Gig
//             </button>
//         </form>
//     )