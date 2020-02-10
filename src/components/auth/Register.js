import React, { useContext, useRef } from 'react'
import './Logins.css'
import { InstrumentContext } from '../instrument/InstrumentProvider'
import { BandContext } from '../band/BandProvider'

  const Register = props => {
  
  const { theBands, updateBand } = useContext(BandContext)
  const { theInstruments, updateInstrument } = useContext(InstrumentContext)

  const name = useRef()
  const email = useRef()
  const username = useRef()
  const password = useRef()
  const verifyPassword = useRef()
  const instrumentId = useRef()
  const bandId = useRef()

  const existingUserCheck = () => {
    return fetch(`http://localhost:8088/users?email=${email.current.value}`)
      .then(_ => _.json())
      .then(user => {
        if (user.length) {
          return true
        }
        return false
      })
  }

  const handleRegister = e => {
    e.preventDefault()

    if (password.current.value === verifyPassword.current.value) {
      existingUserCheck().then(() => {
        fetch('http://localhost:8088/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: email.current.value,
            username: username.current.value,
            password: password.current.value,
            name: `${name.current.value}`,
            instrumentId: instrumentId.current.value,
            bandId: bandId.current.value
          })
        })
          .then(_ => _.json())
          .then(createdUser => {
            if (createdUser.hasOwnProperty('id')) {
              localStorage.setItem('currentUser', createdUser.id)
              props.history.push('/')
            }
          })
      })
    } else {
      window.alert('Passwords do not match')
    }
  }

  return (
    <main style={{ textAlign: 'center' }}>
      <form className='form--login' onSubmit={handleRegister}>
        <h1 className='h3 mb-3 font-weight-normal'>
          Register to use Band Tree
        </h1>
        <fieldset>
          <label htmlFor='name'> Name </label>
          <input
            ref={name}
            type='text'
            name='name'
            className='form-control'
            placeholder='name'
            required
            autoFocus
          />
        </fieldset>
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
            name='email'
            className='form-control'
            placeholder='Email address'
            required
          />
        </fieldset>
        <fieldset>
          <label htmlFor='username'> Username </label>
          <input
            ref={username}
            type='username'
            name='username'
            className='form-control'
            placeholder='Username'
            required
          />
        </fieldset>
        <fieldset>
          <label htmlFor='inputPassword'> Password </label>
          <input
            ref={password}
            type='password'
            name='password'
            className='form-control'
            placeholder='Password'
            required
          />
        </fieldset>
        <fieldset>
          <label htmlFor='verifyPassword'> Verify Password </label>
          <input
            ref={verifyPassword}
            type='password'
            name='verifyPassword'
            className='form-control'
            placeholder='Verify password'
            required
          />
        </fieldset>
        <fieldset>
          <button type='submit'>Sign in</button>
        </fieldset>
      </form>
    </main>
  )
}

export default Register
