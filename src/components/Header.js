import PropTypes from 'prop-types'
import React from 'react'
import icon from '../images/FLSicon_02.png'
import { Auth } from 'aws-amplify';

let button

Auth.currentAuthenticatedUser({
}).then(user => {
  console.log(user)
  button = 'Forms'
})
  .catch(err => {
    console.log(err)
    button = 'Sign Up/Login'
  });
// let [user, setUser] = useState(null)
// useEffect(() => {
//   let updateUser = async authState => {
//     try {
//       let user = await Auth.currentAuthenticatedUser()
//       setUser(user)
//     } catch {
//       setUser(null)
//     }
//   }
//   Hub.listen('auth', updateUser) // listen for login/signup events
//   updateUser() // check manually the first time because we won't get a Hub event
//   return () => Hub.remove('auth', updateUser) // cleanup
// }, []);

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
            console.log(props)
            }}>
              Sign Up/Login
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
