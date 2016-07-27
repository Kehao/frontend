import React from 'react'
import _ from 'ramda'
import setDisplayName from 'recompose/setDisplayName'
import 'styles/app.scss'

const App = () => (
  <h1>fook!</h1>
)

const enhancer = _.compose(
  setDisplayName('App'),
)

module.exports = enhancer(App)
