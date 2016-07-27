import React from 'react'
import _ from 'ramda'
import setDisplayName from 'recompose/setDisplayName'

const App = () => (
  <h1 styleName="haha" >fook!</h1>
)

const enhancer = _.compose(
  setDisplayName('App'),
)

module.exports = enhancer(App)
