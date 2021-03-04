import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import './Header.css';

const Header = () => (
  <>
    <StaticImage
      src="../../assets/images/me.jpg"
      alt="Adrian Osmond"
      aspectRatio={926 / 1880}
      formats={['auto', 'webp', 'avif']}
      loading="eager"
      className="me"
      style={{ position: 'fixed' }}
      imgStyle={{
        objectFit: 'contain',
        objectPosition: '0 0',
      }}
    />
    <h1 className="welcome">
      <span className="welcome__hello">Hello!</span>
      <br />
      <span className="welcome__name">I'm Adrian Osmond,</span>
      <br />
      <span className="welcome__job">a front-end developer.</span>
    </h1>
  </>
);

export default Header;
