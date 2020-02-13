import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import BandTree from './components/BandTree'

ReactDOM.render(
  <Router>
    <BandTree />
  </Router>,
  document.getElementById('root')
)
