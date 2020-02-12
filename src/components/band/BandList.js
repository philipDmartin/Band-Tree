import React, { useContext } from "react"
import { UserContext } from "../users/UserProvider"
import Band from "./Band"

export default () => {
    const { user } = useContext(UserContext)
    const theCurrentUser = user.find(u => u.id === parseInt (localStorage.getItem("currentUser"))) || {}
    const theCurrentUsers = user.filter(u => u.bandId === theCurrentUser.bandId)

    return (
        <div className="users">
        {
            theCurrentUsers.map(use => <Band key={use.id} user={use} />)
        }
        </div>
    )
}
