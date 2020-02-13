import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import NavBar from './nav/NavBar'
import './nav/NavBars.css'
import ApplicationViews from './ApplicationViews'
import './BandTree.css'
import Login from './auth/Login'
import Register from './auth/Register'
import { InstrumentProvider } from './instrument/InstrumentProvider'
import { BandProvider } from './band/BandProvider'

export default () => (
  <>
    <Route
      render={() => {
        if (localStorage.getItem('currentUser')) {
          return (
            <>
              <Route render={props => <NavBar {...props} />} />
              <Route render={props => <ApplicationViews {...props} />} />
            </>
          )
        } else {
          return <Redirect to='/login' />
        }
      }}
    />
    <InstrumentProvider>
      <BandProvider>
        <Route path='/login' render={props => <Login {...props} />} />
      </BandProvider>
    </InstrumentProvider>

    <InstrumentProvider>
      <BandProvider>
        <Route path='/register' render={props => <Register {...props} />} />
      </BandProvider>
    </InstrumentProvider>
  </>
)
