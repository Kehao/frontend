import React from 'react'
import _ from 'ramda'
import setDisplayName from 'recompose/setDisplayName'
import CSSModules from 'react-css-modules'
import VideoItem from 'components/VideoItem'
import styles from './styles.scss'

const fakeVideoList = [
  { title: 'video', cover: 'http://placehold.it/500x500' },
  { title: 'video', cover: 'http://placehold.it/500x500' },
  { title: 'video', cover: 'http://placehold.it/500x500' },
  { title: 'video', cover: 'http://placehold.it/500x500' },
  { title: 'video', cover: 'http://placehold.it/500x500' },
  { title: 'video', cover: 'http://placehold.it/500x500' },
  { title: 'video', cover: 'http://placehold.it/500x500' },
  { title: 'video', cover: 'http://placehold.it/500x500' },
  { title: 'video', cover: 'http://placehold.it/500x500' },
]

const VideoList = () => (
  <div>
    {
      fakeVideoList.map((video, index) => (
        <VideoItem key={index} video={video} />
      ))
    }
  </div>
)

const enhancer = _.compose(
  setDisplayName('VideoList'),
  CSSModules(styles),
)

export default enhancer(VideoList)
