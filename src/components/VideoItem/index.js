import React from 'react'
import _ from 'ramda'
import setDisplayName from 'recompose/setDisplayName'
import CSSModules from 'react-css-modules'
import styles from './styles.scss'

const VideoItem = ({ video }) => (
  <div>
    <h4>{video.title}</h4>
    <img src={video.cover} />
  </div>
)

const enhancer = _.compose(
  setDisplayName('VideoItem'),
  CSSModules(styles),
)

export default enhancer(VideoItem)
