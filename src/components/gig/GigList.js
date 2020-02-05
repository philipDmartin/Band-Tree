import React, { useContext } from "react"
import { GigContext } from "./GigProvider"
import Gig from "./Gig"
import "./Gigs.css"

export default (props) => {

    const { theGig } = useContext(GigContext)
    
console.log(theGig)
    return (
        <div className="gigs">
            <h1>Gigs</h1>
            <button onClick={() => props.history.push("/gigs/create")}>
                Add Gig
            </button>
            <article className="gigList">
                {
                    theGig.map(gig => <Gig key={gig} gig={gig} {...props} />)
                }
            </article>
        </div>
    )    
}
