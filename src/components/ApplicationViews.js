import React from 'react'
import { Route } from 'react-router-dom'

import { UserProvider } from './users/UserProvider'
import './users/Users.css'

import { GigProvider } from './gig/GigProvider'
import GigForm from './gig/GigForm'
import GigList from './gig/GigList'

import { NoteProvider } from './note/NoteProvider'
import NoteForm from './note/NoteForm'
import NoteList from './note/NoteList'

import { SongProvider } from './song/SongProvider'
import SongForm from './song/SongForm'
import SongList from './song/SongList'

import { BandProvider } from './band/BandProvider'
import BandList from './band/BandList'

export default props => {
  return (
    <>
      <UserProvider>
        <SongProvider>
          <NoteProvider>
            <BandProvider>
              <GigProvider>
                <Route path='/bands'>
                  <BandList />
                </Route>

                <Route
                  exact
                  path='/gigs'
                  render={props => <GigList {...props} />}
                />
                <Route
                  exact
                  path='/gigs/create'
                  render={props => <GigForm {...props} />}
                />
                <Route
                  path='/gigs/edit/:gigId(\d+)'
                  render={props => <GigForm {...props} />}
                />

                <Route
                  exact
                  path='/notes'
                  render={props => <NoteList {...props} />}
                />

                <Route
                  exact
                  path='/notes/create'
                  render={props => <NoteForm {...props} />}
                />

                <Route
                  path='/notes/edit/:noteId(\d+)'
                  render={props => <NoteForm {...props} />}
                />

                <Route
                  exact
                  path='/songs'
                  render={props => <SongList {...props} />}
                />
                <Route
                  exact
                  path='/songs/create'
                  render={props => <SongForm {...props} />}
                />
                <Route
                  path='/songs/edit/:songId(\d+)'
                  render={props => <SongForm {...props} />}
                />
              </GigProvider>
            </BandProvider>
          </NoteProvider>
        </SongProvider>
      </UserProvider>
    </>
  )
}
