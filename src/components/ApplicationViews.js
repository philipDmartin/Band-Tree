import React from "react";
import { Route } from "react-router-dom";

import { UserProvider } from "./user/UserProvider"

import { GigProvider } from "./gig/GigProvider";
import GigForm from "./gig/GigForm";
import GigList from "./gig/GigList";

export default props => {
    return (
        <>
            <GigProvider>
                <Route exact 
                    path="/gigs" render={props => <GigList {...props} />
                    } />
                <Route exact path="/gigs/create">
                    <GigForm />
                </Route>
                <Route path="/gigs/edit/:gigId(\d+)" render={
                    props => <GigForm {...props} />
                    } />
            </GigProvider>
        </>
    );
};
