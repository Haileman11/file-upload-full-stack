import React from 'react'
import { Router, Route } from 'react-router-dom'

import {createBrowserHistory} from 'history'
import App from './App';
const history = createBrowserHistory()

export const makeAuthRouting = () => {
  return (
    <Router history={history}>
      <div>        
        <Route
          render={props => {
            return <App {...props} />
          }}
        />
      </div>
    </Router>
  )
}
