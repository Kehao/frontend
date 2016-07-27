import React from 'react'
import _ from 'ramda'
import setDisplayName from 'recompose/setDisplayName'
import VideoList from 'components/VideoList'

const App = () => (
  <div>
    <VideoList />
  </div>
)

const enhancer = _.compose(
  setDisplayName('App'),
)

module.exports = enhancer(App)
