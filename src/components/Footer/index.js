import React from 'react'
import _ from 'ramda'
import setDisplayName from 'recompose/setDisplayName'
import CSSModules from 'react-css-modules'
import styles from './styles.scss'

const Footer = () => (
  <div styleName="footer">
    <p styleName="tm">-.- &copy; 2016 jigo-jigo Labs. all rights give up.</p>
    <p styleName="made_by">
      Made with
      <a styleName="heart">
        <svg xmlns="http://www.w3.org/2000/svg">
          <path d="
            M9 2C7.312 2 6 3.5 6 3.5S4.687 2 3
            2C1.312 2 0 3.312 0 5c0 3.188 3.75
            3.012 6 6 2.25-2.988 6-2.812 6-6
            0-1.688-1.313-3-3-3z"/>
        </svg>
      </a>
      in H.Z.
    </p>
  </div>
)

const enhancer = _.compose(
  setDisplayName('Footer'),
  CSSModules(styles),
)

export default enhancer(Footer)
