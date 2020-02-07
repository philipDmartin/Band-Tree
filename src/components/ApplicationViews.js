import React from "react";
import { Route } from "react-router-dom";

import { UserProvider } from "./users/UserProvider"

import { GigProvider } from "./gig/GigProvider";
import GigForm from "./gig/GigForm";
import GigList from "./gig/GigList";

import { NoteProvider } from "./note/NoteProvider";
import NoteDetails from "./note/NoteDetails"
import NoteForm from "./note/NoteForm";
import NoteList from "./note/NoteList";

import { SongProvider } from "./song/SongProvider";
import SongForm from "./song/SongForm";
import SongList from "./song/SongList";

export default props => {
    return (
        <>
        <SongProvider>
            <NoteProvider>
                <GigProvider>
                    <UserProvider>

                        <Route exact 
                            path="/gigs" render={props => <GigList {...props} />
                            } />
                        <Route exact 
                            path="/gigs/create" render={props => <GigForm {...props} />
                            } />
                        <Route path="/gigs/edit/:gigId(\d+)" render={
                            props => <GigForm {...props} />
                            } />

                        <Route exact 
                            path="/notes" render={props => <NoteList {...props} />
                            } />

                        <Route exact 
                            path="/notes/create" render={props => <NoteForm {...props} />
                            } />

                        <Route path="/notes/edit/:noteId(\d+)" render={
                            props => <NoteForm {...props} />
                            } />
                        {/* <Route path="/notes/:ntoeId(\d+)" render={
                            props => <NoteDetails {...props} />
                        } /> */}

                        <Route exact 
                            path="/songs" render={props => <SongList {...props} />
                            } />
                       <Route exact 
                            path="/songs/create" render={props => <SongForm {...props} />
                            } />
                        <Route path="/songs/edit/:songId(\d+)" render={
                            props => <SongForm {...props} />
                            } />

                    </UserProvider>
                </GigProvider>
            </NoteProvider>
        </SongProvider>
        </>
    );
};
