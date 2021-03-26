import PropTypes from 'prop-types'
import React from 'react'
import icon from '../images/FLSicon_02.png'


const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo" style={{ position: 'relative' }}>
      <img className="logoImg" src={icon} alt='Logo' style={{ width: '80%', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />
    </div>
    <div className="content">
      <div className="inner">
        <h1>Front Line Solutions</h1>
        <p>
          "Innovating Tradition"
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
            What We Do
          </button>
        </li>
        <li>
          <button onClick={() => { 
            props.onOpenArticle('work')
            }}>
              {props.data ? 'User Portal' : 'Sign Up/Login'}
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            Our Mission
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact Us
          </button>
        </li>
      </ul>
    </nav>
  </header>
)



Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
  data: PropTypes.bool
}

export default Header
