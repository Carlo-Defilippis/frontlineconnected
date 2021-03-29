import PropTypes from 'prop-types';
import React from 'react';
import pic01 from '../images/cruiser.jpg';
import pic03 from '../images/paperwork.jpg';
import { Auth } from 'aws-amplify'
import UserPortal from './Amplify';

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: ''
    }
  }

  currentUser = () => {
    Auth.currentAuthenticatedUser()
      .then(user => {
        console.log("USER", user);
        this.setState({
          user: true
        })
      })
      .catch(err => {
        console.log("ERROR", err);
        this.setState({
          user: false
        })
      });
  };

  render() {
    // console.log('props in main', this.props)
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle();
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major" style={{ margin: '0', padding: '0', width: '100%', textAlign: 'center' }}>WHAT WE DO</h2>
          <span className="image main">
            <img src={pic01} alt="Police Vehicle" />
          </span>
          <p>
          We understand that time waits for no one and neither does the technology that comes with it. So we’ve developed 
          a solution for professionals in the field for all lines of work. Originally designed for law enforcement officers 
          working the road alone, our service digitalizes department forms and makes them available to be filled out on the go.
          <br />
          <br />
          All forms we process are retained on HIPAA compliant servers. However, user input to fill a form out is immediately 
          cleared once a finalized printable form is created. Our service is designed this way to protect sensitive personal 
          identifying information.
          </p>
          <p>
          So what’s so special about our service? It’s <a style={{ fontWeight: 'bold' }}>100% MOBILE</a>. Front Line Solutions can function and print from any computer 
          or mobile device via Wifi/Bluetooth/USB onto any printer including mobile printers. Thanks to this game-changing feature, 
          officers alone on the road can fill out forms on-scene without leaving suspects alone to destroy evidence or to intimidate 
          victims just to find a form that may or may not be in the trunk of their cruiser.
          <br />
          <br />
          We offer our service with a 7 day trial on a free demo account to learn how our system works. From daily logs and FTO 
          paperwork to crash reports and affidavits, Front Line Solutions has you covered.
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        > 
          <UserPortal data={this.props} />
          {/* <AuthStateApp /> */}
          {/* <iframe title="your title" style={{ width: '100%', maxWidth: '100%', height: '500px' }} src={URL}></iframe> */}
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major" style={{ margin: '0', padding: '0', width: '100%', textAlign: 'center' }}>Our Mission</h2>
          <span className="image main">
            <img src={pic03} alt="Paperwork" style={{ maxHeight: 'auto', maxWidth: 'auto' }}/>
          </span>
          <p>
          At Front Line Solutions, our mission is to innovate field and office based forms by offering a secure web-based mobile form service.
          <br />
          <br />
          We are a veteran-owned business created by law enforcement officers for law enforcement officers. Our #1 priority for our customers 
          is safety. Our goal is reducing officer downtime by utilizing mobile support to complete necessary forms on-scene without compromising 
          officer safety.
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major" style={{ margin: '0', padding: '0', width: '100%', textAlign: 'center' }}>Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/HuntaroSan"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/codebushi/gatsby-starter-dimension"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
