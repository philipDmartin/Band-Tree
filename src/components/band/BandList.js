import React, { useContext } from "react"
import { UserContext } from "../users/UserProvider"
import Band from "./Band"

export default () => {
    const { user } = useContext(UserContext)
    console.log(user)

    return (
        <div className="users">
        {
            user.map(use => <Band key={use.id} user={use} />)
        }
        </div>
    )
}
