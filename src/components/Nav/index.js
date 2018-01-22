import React, { Component } from 'react';
import SmoothScroll from '../../lib/SmoothScroll'
import './index.css';

class Nav extends Component {
  render() {
    return (
      <nav className="nav">
        <a className="nav__link" href="#about-me" onClick={SmoothScroll}>About Me</a>
        <a className="nav__link" href="#my-work" onClick={SmoothScroll}>My Work</a>
        <a className="nav__link" href="#get-in-touch" onClick={SmoothScroll}>Get in Touch</a>
      </nav>
    );
  }
}

export default Nav;
