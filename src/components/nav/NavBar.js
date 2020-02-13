import React from 'react'
import { Link } from 'react-router-dom'
import './NavBars.css'

export default props => {
  return (
    <ul className='navbar'>
      <li className='navbar__item active'>
        <Link className='navbar__link' to='/bands'>
          Your Tree
        </Link>
      </li>
      <li className='navbar__item active'>
        <Link className='navbar__link' to='/gigs'>
          Gigs
        </Link>
      </li>
      <li className='navbar__item active'>
        <Link className='navbar__link' to='/songs'>
          Set List
        </Link>
      </li>
      <li className='navbar__item active'>
        <Link className='navbar__link' to='/notes'>
          Notes
        </Link>
      </li>

      {localStorage.getItem('currentUser') ? (
        <li className='navbar__item'>
          <Link
            className='navbar__link'
            to=''
            onClick={e => {
              e.preventDefault()
              localStorage.removeItem('currentUser')
              props.history.push('/')
            }}
          >
            Logout
          </Link>
        </li>
      ) : (
        ''
      )}
    </ul>
  )
}
