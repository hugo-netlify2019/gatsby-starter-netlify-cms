import React from 'react'
import { Link } from 'gatsby'
/* import github from '../img/github-icon.svg' */
import logo from '../img/logo2-5.svg'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
      <ul>
        <li>
{/*         <div className="container"> */}
        <div className="full-width-image-top margin-top-0">
          <div className="navbar-brand navbar-start navbar-end has-text-centered">
            {/* <Link to="/" className="navbar-item" title="Logo"> */}
            <Link to="/" title="Logo">
              {/* <img src={logo} alt="btc" style={{ height:  '120px' }} /> */}
              <img src={logo} alt="btc" style={{ height:  '80px' }} />
            </Link>
            {/* Hamburger menu */}
{/*             <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
 */}
            <div         style={{
          display: 'flex',
          lineHeight: '1',
          justifyContent: 'space-around',
          alignItems: 'left',
          flexDirection: 'column',
            }}
          >
            <h4
          className="has-text-weight is-size-6-mobile is-size-6-tablet is-size-5-widescreen"
          style={{
            boxShadow:
              'rgb(255, 68, 0, 0) 0.5rem 0px 0px, rgb(255, 68, 0, 0) -0.5rem 0px 0px',
            backgroundColor: 'rgb(255, 68, 0, 0)',
            color: 'white',
            lineHeight: '1',
            padding: '0.25em',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
          >
          公益財団法人 
          <span className="has-text-weight-bold" style={{
            fontSize:'1.1em',
          }}>
            軽種馬調教育成センター
          </span>
          </h4>
          <h4
          className="has-text-weight is-size-6-mobile is-size-6-tablet is-size-5-widescreen"
          style={{
            boxShadow:
              'rgb(255, 68, 0, 0) 0.5rem 0px 0px, rgb(255, 68, 0, 0) -0.5rem 0px 0px',
            backgroundColor: 'rgb(255, 68, 0, 0)',
            color: 'white',
            lineHeight: '1',
            padding: '0.25em',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
          >
              BroadHorse Training Center
           </h4>
            {/* Hamburger menu */}
             <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
            </div>
          </div>
        </div>          
        </li>        
        <li>
        <div className="container">
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start navbar-end has-text-centered">
              <Link className="navbar-item" to="/about">
                調教場の利用
              </Link>
              <Link className="navbar-item" to="/about">
                馬の仕事
              </Link>
              <Link className="navbar-item" to="/about">
                その他
              </Link>
              <Link className="navbar-item" to="/about">
                BTCについて
              </Link>

{/*               <Link className="navbar-item" to="/products">
                馬の仕事
              </Link>
              <Link className="navbar-item" to="/blog">
                その他
              </Link>
              <Link className="navbar-item" to="/contact">
                BTCについて
              </Link>
 */}{/*               <Link className="navbar-item" to="/contact/examples">
                Form Examples
              </Link> */}
            </div>
{/*             
            <div className="navbar-end has-text-centered">
              <a
                className="navbar-item"
                href="https://github.com/netlify-templates/gatsby-starter-netlify-cms"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <img src={github} alt="Github" />
                </span>
              </a>
            </div>
 */}
           </div>
        </div>
        </li>
        </ul>
      </nav>
    )
  }
}

export default Navbar
