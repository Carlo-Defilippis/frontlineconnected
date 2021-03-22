import PropTypes from 'prop-types'
import React from 'react'
import icon from '../images/FLSicon_02.png'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo" style={{ position: 'relative'}}>
      <img className="logoImg" src={icon} alt='Logo' style={{ width: '80%', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />
    </div>
    <div className="content">
      <div className="inner">
        <h1>Front Line Solutions</h1>
        <p>

        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('intro')
            }}
          >
            Intro
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('work')
            }}
          >
            Work
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            About
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
