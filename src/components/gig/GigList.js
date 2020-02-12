import React, { useContext } from "react"
import { GigContext } from "./GigProvider"
import { UserContext } from "../users/UserProvider"
// import { BandContext } from "../band/BandProvider"
// import { InstrumentContext } from "../instrument/InstrumentProvider"
import Gig from "./Gig"
import "./Gigs.css"

export default (props) => {
    // const {theBands} = useContext(BandContext)
    // const {theInstruments} = useContext(InstrumentContext)
    const {user} = useContext(UserContext)
    const { theGigs } = useContext(GigContext)

    const theCurrentUser = user.find(u => u.id === parseInt (localStorage.getItem("currentUser"))) || {}
    const theCurrentGigs = theGigs.filter(g => g.bandId === theCurrentUser.bandId)

    // const band = theInstruments.find(ins => ins.id === instrument.bandId)
    // const band = theBands.find(ban => ban.id === instrument.bandId)
    
    return (
        <div className="gigs">
            <h1>Gigs</h1>
            <button onClick={() => props.history.push("/gigs/create")}>
                Add Gig
            </button>
            <article className="gigList">
                {
                    theCurrentGigs.map(gig => <Gig key={gig} gig={gig} {...props} />)
                }
            </article>
        </div> 
    )     
}
