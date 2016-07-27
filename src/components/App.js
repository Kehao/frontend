import React from 'react'
import _ from 'ramda'
import setDisplayName from 'recompose/setDisplayName'

import Footer from './Footer'

const App = () => (
  <div>
    <h1>fook!</h1>
    <Footer />
  </div>
)

const enhancer = _.compose(
  setDisplayName('App'),
)

module.exports = enhancer(App)
