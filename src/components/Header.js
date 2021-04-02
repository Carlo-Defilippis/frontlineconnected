import PropTypes from 'prop-types'
import React from 'react'
import icon from '../images/FLSicon_02.png'
import { Link } from 'gatsby'
import Button from 'react-bootstrap/Button'

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
          <Button
            className="mb-1"
            onClick={() => {
              props.onOpenArticle('intro')
            }}
          >
            What We Do
          </Button>
        </li>
        <li>
          <Link to='/app/mydashboard'>
          <Button className="mb-1">
          {/* <Button onClick={() => { 
            props.onOpenArticle('work')
            }}> */}
              {props.data ? 'User Portal' : 'Sign Up/Login'}
          </Button>
          </Link>
        </li>
        <li>
          <Button className="mb-1"
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            Our Mission
          </Button>
        </li>
        <li>
          <Button className="mb-1"
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact Us
          </Button>
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
