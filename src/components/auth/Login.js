import React, { useContext, useRef } from 'react'
import { Link } from 'react-router-dom'
import './Logins.css'
import { InstrumentContext } from '../instrument/InstrumentProvider'
import { BandContext } from '../band/BandProvider'

//this function handles context and refrance names
const Login = props => {
  const { theBands, updateBand } = useContext(BandContext)
  const { theInstruments, updateInstrument } = useContext(InstrumentContext)

  const email = useRef()
  const password = useRef()
  const instrumentId = useRef()
  const bandId = useRef()

  //track the current value of email when the user logs in
  const existingUserCheck = () => {
    return fetch(`http://localhost:8088/users?email=${email.current.value}`)
      .then(_ => _.json())
      .then(user => {
        if (user.length) {
          return user[0]
        }
        return false
      })
  }

  const handleLogin = e => {
    e.preventDefault()

    //requre a password verification and fetch password data
    existingUserCheck().then(exists => {
      if (exists && exists.password === password.current.value) {
        localStorage.setItem('currentUser', exists.id)
        props.history.push('/')
      } else if (exists && exists.password !== password.current.value) {
        window.alert('Password does not match')
      } else if (!exists) {
        fetch('http://localhost:8088/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          //write objects as strings in you database and track there Id intigers
          body: JSON.stringify({
            email: email.current.value,
            password: password.current.value,
            instrumentId: parseInt(instrumentId.current.value),
            bandId: parseInt(bandId.current.value)
          })
        })
          //write a function to handle the users local storage
          .then(_ => _.json())
          .then(response => {
            localStorage.setItem('currentUser', response.id)
            props.history.push('/')
          })
      }
    })
  }

  //return a form for the user to log in there info
  return (
    <main className='container--login'>
      <section>
        <form className='form--login' onSubmit={handleLogin}>
          <h1>Band Tree</h1>
          <h2>Please sign in</h2>
          <section></section>
          <fieldset>
            <div className='form-group'>
              <label htmlFor='instrumentId'>Assign instrument: </label>
              <select
                defaultValue=''
                name='instrumentId'
                ref={instrumentId}
                id='instrumentId'
                className='form-control'
                placeholder='instrumentId'
                required
                autoFocus
              >
                //map through band and instruments to find there Id
                <option value='0'>Select a instrument</option>
                {theInstruments.map(i => (
                  <option key={i.id} value={i.id}>
                    {i.instrument}
                  </option>
                ))}
              </select>
            </div>
          </fieldset>
          <fieldset>
            <div className='form-group'>
              <label htmlFor='bandId'>Assign band: </label>
              <select
                defaultValue=''
                name='bandId'
                ref={bandId}
                id='bandId'
                className='form-control'
                placeholder='bandId'
                required
                autoFocus
              >
//map through band and instruments to find there Id
                <option value='0'>Select a band</option>
                {theBands.map(b => (
                  <option key={b.id} value={b.id}>
                    {b.name}
                  </option>
                ))}
              </select>
            </div>
          </fieldset>
          <fieldset>
            <label htmlFor='inputEmail'> Email address </label>
            <input
              ref={email}
              type='email'
              id='email'
              className='form-control'
              placeholder='Email address'
              required
              autoFocus
            />
          </fieldset>
          <fieldset>
            <label htmlFor='inputPassword'> Password </label>
            <input
              ref={password}
              type='password'
              id='password'
              className='form-control'
              placeholder='Password'
              required
            />
          </fieldset>
          <fieldset>
            <button type='submit'>Sign in</button>
          </fieldset>
        </form>
      </section>
      <section className='link--register'>
        <Link to='/register'>Not a member yet?</Link>
      </section>
    </main>
  )
}
export default Login
