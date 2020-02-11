import React from "react"

export default ({ user }) => (
    <section className="user">
        <h3 className="user__name">{user.name}</h3>
        <h3 className="user__name">{user.instrumentId}</h3>
        <h3 className="user__name">{user.bandId}</h3>
    </section>
)
